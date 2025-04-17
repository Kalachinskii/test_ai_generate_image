import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Image } from "./components/Image/Image";

export function App() {
    const examlePrompts = [
        "A futuristic cyberpunk city at night, neon lights reflecting on wet streets, towering skyscrapers with holographic ads, a lone figure in a high-tech coat walking past neon signs, cinematic lighting, 8K ultra-detailed.",
        "A majestic dragon soaring over a medieval castle at sunset, its scales shimmering in gold and red, fiery breath illuminating the clouds, highly detailed fantasy art, dramatic composition.",
        "An adorable kitten wearing a tiny astronaut helmet, floating in zero gravity with stars and Earth visible through a spaceship window, Pixar-style 3D rendering, soft lighting.",
        "A serene Japanese garden in autumn, vibrant red maple leaves covering stone paths, a wooden bridge over a koi pond, soft sunlight filtering through trees, Studio Ghibli-inspired watercolor style.",
        "A post-apocalyptic wasteland with rusted cars and overgrown vegetation, a stormy sky casting eerie green light, a masked scavenger holding a makeshift weapon, photorealistic textures.",
        "A steampunk airship flying above Victorian London, intricate brass gears and smokestacks, passengers in goggles and corsets leaning over the railing, sepia-toned with cinematic depth.",
        "A mystical elf archer standing on a tree branch in an enchanted forest, glowing blue tattoos on her skin, aiming at an unseen target, magical particles floating around, digital painting.",
        "A surreal landscape where giant jellyfish float through a sky of liquid gold, upside-down mountains in the distance, dreamlike atmosphere, vibrant colors, art by Moebius.",
        "A cybernetic samurai with a glowing katana, standing in a neon-lit alley, rain falling slowly as his visor displays targeting data, hyper-realistic cyberpunk aesthetic.",
        "A cozy cabin in the snowy woods, smoke rising from the chimney, warm light glowing through windows, northern lights dancing in the starry sky, Disney-style illustration.",
        "A terrifying cosmic horror entity emerging from a black hole, tentacles made of galaxies, eyes like supernovae, Lovecraftian style, dark and intricate artwork.",
        "A bustling alien marketplace on a desert planet, exotic creatures bartering under twin suns, stalls with glowing crystals and strange artifacts, sci-fi realism.",
        "A warrior queen riding a armored war rhino through a battlefield, flaming arrows streaking across the sky, epic fantasy composition, inspired by Frank Frazetta.",
        "A tiny wizard's workshop hidden inside a giant pumpkin, shelves filled with potions and spellbooks, a black cat sleeping near a cauldron, whimsical detailed illustration.",
        "A lone cowboy riding through a desert canyon at dusk, silhouetted against a blood-red sky, tumbleweeds rolling past, ultra-wide cinematic shot, Red Dead Redemption vibes.",
        "A futuristic Tokyo street in 2150, flying cars between holographic billboards, a neon umbrella reflecting pink and blue lights, Blade Runner meets anime aesthetics.",
        "A mermaid with bioluminescent scales resting on a coral throne, schools of tropical fish swirling around her, sunbeams piercing the deep ocean, Disney princess realism.",
        "A haunted Victorian mansion covered in ivy, lightning striking behind its broken windows, a ghostly figure visible in the doorway, gothic horror atmosphere.",
        "A battle-hardered orc blacksmith forging a fiery axe in a volcano's heart, sweat dripping onto molten metal, dark fantasy realism, detailed armor textures.",
        "A robot farmer tending to a field of glowing plants under a purple sky, a small solar-powered drone watering crops, sci-fi utopian illustration.",
        "A time traveler in steampunk gear stepping out of a clockwork portal into ancient Egypt, pyramids under construction in the background, intricate mashup of eras.",
        "A phoenix reborn from golden ashes, wings spreading wide in a cathedral of fire, ultra-detailed feathers and dynamic flames, symbolic artwork.",
        "A secret library hidden inside a giant tree, spiral staircases leading to floating books, ancient runes glowing softly, magical academic core.",
        "A pirate ship trapped in a giant ice crystal, frozen mid-battle with skeletons clutching swords, eerie blue lighting, fantasy adventure concept.",
        "A cybernetic fox with LED-lined fur running through a digital forest, binary code falling like leaves, synthwave color palette, glitch art effects.",
        "A goddess of the cosmos wearing a dress made of constellations, holding a dying star in her palms, ethereal and melancholic space art.",
        "A wild west town invaded by aliens, cowboys hiding behind saloon doors as a UFO hovers overhead, retro sci-fi movie poster style.",
        "A crystal cave filled with giant glowing mushrooms, a subterranean lake reflecting bioluminescent light, fantasy exploration scene.",
        "A samurai fighting a skeleton army in a moonlit bamboo forest, cherry blossoms swirling in the air, dynamic ink painting style.",
        "A postcard-like view of Santorini with white buildings and blue domes, sunset painting the sky in pastel hues, photorealistic travel shot.",
        "A mad scientist's lab with bubbling test tubes, a Frankenstein monster under a sheet, lightning flashing outside the window, gothic horror comedy.",
        "A futuristic mech suit covered in jungle vines, abandoned for centuries, a small animal nesting in its cockpit, post-human world concept.",
        "A Viking funeral at sea, a burning longship drifting toward the horizon under the northern lights, emotional and cinematic composition.",
        "A magical girl transforming with sparkling ribbons and cosmic energy, anime-style action pose, vibrant magical effects.",
        "A dystopian megacity where the rich live in floating skyscrapers while the poor crowd the polluted streets below, social commentary art.",
        "A witch's apothecary with hanging herbs, jars of eyeballs, and a black cauldron simmering, dark academia aesthetic, highly detailed.",
        "A parallel universe where cats rule the world, wearing tiny crowns and holding court in a grand palace, humorous and whimsical.",
        "A lone astronaut standing on Mars, planting a flag next to the ruins of an ancient alien civilization, cinematic sci-fi realism.",
        "A fairy-tale wedding in an enchanted forest, deer with floral antlers attending, fireflies forming a chandelier, romantic Disney-esque scene.",
        "A noir detective in a trench coat investigating a crime scene with glowing cybernetic evidence, rain-soaked neon alley, cinematic lighting.",
        "A colossal kaiju attacking a futuristic city, fighter jets swarming around it like bees, Godzilla-inspired epic destruction.",
        "A dwarven miner discovering a cavern filled with glowing crystals and gold veins, fantasy adventure illustration.",
        "A surrealist painting where the sky is made of liquid mercury, fish swimming through clouds, Salvador Dali meets Hayao Miyazaki.",
        "A cyberpunk hacker girl with neon tattoos and augmented reality glasses, typing on a holographic keyboard, purple and pink lighting.",
        "A mummy awakening in a modern museum, bandages unraveling as it steps out of its sarcophagus, horror-comedy concept.",
        "A steampunk submarine exploring the depths of an alien ocean, crew in brass diving suits encountering bioluminescent creatures.",
        "A celestial wolf made of stars running across the Milky Way, cosmic dust trailing behind it, mystical astronomy art.",
        "A post-war paradise where nature reclaims abandoned tanks and buildings, deer grazing beside rusted war machines, hopeful dystopia.",
        "A legendary sword embedded in a stone, surrounded by cherry blossoms, waiting for the chosen one, epic fantasy symbolism.",
    ];

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
            examlePrompts[Math.floor(Math.random() * examlePrompts.length)];
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
