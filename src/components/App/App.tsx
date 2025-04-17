import { useState } from "react";
import styles from "./App.module.css";
import { Image } from "../Image/Image";
import { EXAMLE_PROMPTS } from "../../constants/examlePrompts";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { sizeSelectData } from "../../constants/sizeSelectData";
import { countSelectData } from "../../constants/countSelectData";
import { modelSelectData } from "../../constants/modelSelectData";
import { getImageDimensions } from "../../utils/imageUtils";
import { Header } from "../Header/Header";
import { Textaria } from "../Textarea/Textaria";

export function App() {
    const [modelSelect, setModelSelect] = useState<string>("");
    const [countSelect, setCountSelect] = useState<string>("0");
    const [sizeSelect, setSizeSelect] = useState<string>("");
    const [imgUrls, setImgUrls] = useState<string[]>([]);
    const [prompt, setPrompt] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    // рандомный промт запрос
    const generatePrompt = () => {
        const randomPrompt =
            EXAMLE_PROMPTS[Math.floor(Math.random() * EXAMLE_PROMPTS.length)];
        setPrompt(randomPrompt);
    };

    const requestApi = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formProps = Object.fromEntries(formData) as unknown;
        if (formProps instanceof Object) {
            generateImage(formProps);
        }
    };

    const generateImage = async ({ ...props }) => {
        const MODEL_URL = `https://api-inference.huggingface.co/models/${modelSelect}`;
        const { width, height } = getImageDimensions(props.sizeSelect);
        setLoading(true);

        const imagePromises = Array.from(
            { length: props.countSelect },
            async (_) => {
                try {
                    const response = await fetch(MODEL_URL, {
                        headers: {
                            Authorization: `Bearer ${
                                import.meta.env.VITE_API_KEY
                            }`,
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                        body: JSON.stringify({
                            inputs: prompt,
                            parameters: {
                                width,
                                height,
                            },
                            options: {
                                wait_for_model: true,
                                user_cache: false,
                            },
                        }),
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(
                            errorData.error || "Unknown error occurred"
                        );
                    }

                    const result = await response.blob();
                    const imageUrl = URL.createObjectURL(result);
                    setImgUrls((prevUrls) => [...prevUrls, imageUrl]);
                } catch (error) {
                    console.error("Error generating image:", error);
                }
            }
        );

        await Promise.allSettled(imagePromises);
        // когда все загрузилось
        setLoading(false);
    };

    return (
        <div className={styles.container}>
            {/* header */}
            <Header />
            <div className={styles.mainContent}>
                <form onSubmit={requestApi} className="prompt-form">
                    {/* prompt container */}
                    <div className={styles.promptContainer}>
                        <Textaria
                            name="promptInput"
                            placeholderValue="Опиши детально картинку"
                            setPrompt={setPrompt}
                            prompt={prompt}
                        />

                        <Button
                            func={generatePrompt}
                            className={styles.promptBtn}
                        >
                            <i
                                className={`
                                    ${"fa-solid fa-dice"} 
                                    ${styles.logoIcon}
                                `}
                            ></i>
                        </Button>
                    </div>

                    {/* prompt action/buttons */}
                    <div className={styles.promptActions}>
                        <Select
                            setSelect={setModelSelect}
                            value={modelSelect}
                            selectName={"modelSelect"}
                            data={modelSelectData}
                        />

                        <Select
                            setSelect={setCountSelect}
                            value={countSelect}
                            selectName={"countSelect"}
                            data={countSelectData}
                        />

                        <Select
                            setSelect={setSizeSelect}
                            value={sizeSelect}
                            selectName={"sizeSelect"}
                            data={sizeSelectData}
                        />

                        <Button type="submit" className={styles.generateBtn}>
                            <i
                                className={`${"fa-solid fa-wand-sparkles"} ${
                                    styles.logoIcon
                                }`}
                            ></i>
                            Сгенерировать
                        </Button>
                    </div>

                    {/* Result Galery Grid */}
                    <div className={styles.galleryGrid}>
                        {imgUrls.map((url, index) => (
                            <Image key={index} loading={false} imgUrl={url} />
                        ))}
                        {loading && <Image imgUrl={"#"} loading={true} />}
                    </div>
                </form>
            </div>
        </div>
    );
}
