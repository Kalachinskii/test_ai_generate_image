import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Image } from "../Image/Image";
// import { EXAMLE_PROMPTS  from "../../constants/exa"
import { EXAMLE_PROMPTS } from "../../constants/examlePrompts";

export function App() {
    const [themeToggle, setThemeToggle] = useState<string>(() => {
        return localStorage.getItem("theme") || "light";
    });
    const [modelSelect, setModelSelect] = useState<string>("");
    const [countSelect, setCountSelect] = useState<number>(0);
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

    // тема - старт страницы
    useEffect(() => {
        document.body.classList.toggle("darkTheme", themeToggle === "dark");
    }, [themeToggle]);

    // тема - кнопка
    const toggleTheme = () => {
        const newTheme = themeToggle === "light" ? "dark" : "light";
        setThemeToggle(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const requestApi = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const formProps = Object.fromEntries(formData) as unknown;
        if (formProps instanceof Object) {
            generateImage(formProps);
        }
    };

    // размер картинки
    const getImageDimensions = (aspectRatio: string, baseSize = 512) => {
        const [width, height] = aspectRatio.split("/").map(Number);
        const scaleFactor = baseSize / Math.sqrt(width * height);

        let calculatedWidth = Math.round(width * scaleFactor);
        let calculatedHeight = Math.round(height * scaleFactor);

        calculatedWidth = Math.floor(calculatedWidth / 16) * 16;
        calculatedHeight = Math.floor(calculatedHeight / 16) * 16;

        return { width: calculatedWidth, height: calculatedHeight };
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

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModelSelect(event.target.value);
    };

    const handleCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountSelect(Number(event.target.value));
    };

    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSizeSelect(event.target.value);
    };

    return (
        <div className={styles.container}>
            {/* header */}
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <i
                            className={`${"fa-solid fa-wand-magic-sparkles"} ${
                                styles.logoIcon
                            }`}
                        ></i>
                    </div>
                    <h1 className={styles.title}>Генератор картинок</h1>
                </div>

                <button onClick={toggleTheme} className={styles.themeToggle}>
                    <i
                        className={`${
                            themeToggle == "light"
                                ? `${"fa-solid fa-sun"} ${styles.sun}`
                                : `${"fa-solid fa-moon"} ${styles.moon}`
                        } ${styles.logoIcon}`}
                    ></i>
                </button>
            </div>

            <div className={styles.mainContent}>
                <form onSubmit={requestApi} className="prompt-form">
                    {/* prompt container */}
                    <div className={styles.promptContainer}>
                        <textarea
                            name="promptInput"
                            placeholder="Опиши детально картинку"
                            className={styles.promptInput}
                            required
                            autoFocus
                            value={prompt}
                            onChange={handleInputChange}
                        ></textarea>
                        <button
                            onClick={() => generatePrompt()}
                            type="button"
                            className={styles.promptBtn}
                        >
                            <i
                                className={`${"fa-solid fa-dice"} ${
                                    styles.logoIcon
                                }`}
                            ></i>
                        </button>
                    </div>

                    {/* prompt action/buttons */}
                    <div className={styles.promptActions}>
                        <div className={styles.selectWrapper}>
                            <select
                                name="modelSelect"
                                className={styles.customSelect}
                                required
                                value={modelSelect}
                                onChange={handleModelChange}
                            >
                                <option value="" disabled>
                                    Выберети модель
                                </option>
                                <option value="black-forest-labs/FLUX.1-schnell">
                                    FLUX.1-schnell
                                </option>
                                <option value="black-forest-labs/FLUX.1-dev">
                                    FLUX.1-dev
                                </option>
                                <option value="stabilityai/stable-diffusion-xl-base-1.0">
                                    SD-XL 1.0-base Model Card
                                </option>
                            </select>
                        </div>

                        <div className={styles.selectWrapper}>
                            <select
                                name="countSelect"
                                className={styles.customSelect}
                                required
                                value={countSelect}
                                onChange={handleCountChange}
                            >
                                <option value={0} disabled>
                                    Колличество
                                </option>
                                <option value={1}>1 картинка</option>
                                <option value={2}>2 картинка</option>
                                <option value={3}>3 картинка</option>
                                <option value={4}>4 картинка</option>
                            </select>
                        </div>

                        <div className={styles.selectWrapper}>
                            <select
                                name="sizeSelect"
                                className={styles.customSelect}
                                required
                                value={sizeSelect}
                                onChange={handleSizeChange}
                            >
                                <option value="" disabled>
                                    Размер
                                </option>
                                {/* 512 x 512 */}
                                <option value="1/1">Квадрат (1:1)</option>
                                {/* 672 x 384 */}
                                <option value="16/9">Пеизаж (16:9)</option>
                                {/* 384 x 672 */}
                                <option value="9/16">Портрет (9:16)</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.generateBtn}>
                            <i
                                className={`${"fa-solid fa-wand-sparkles"} ${
                                    styles.logoIcon
                                }`}
                            ></i>
                            Сгенерировать
                        </button>
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
