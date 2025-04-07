import styles from "./App.module.css";

export function App() {
    return (
        <div className={styles.container}>
            {/* header */}
            <div className={styles.header}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <i className={"fa-solid fa-wand-magic-sparkles"}></i>
                    </div>
                    <h1 className={styles.title}>Генератор картинок</h1>
                </div>

                <button className={styles.themeToggle}>
                    <i className="fa-solid fa-moon"></i>
                </button>
            </div>

            <div className="main-content">
                <form action="#" className="promt-form">
                    {/* promt container */}
                    <div className="promt-container">
                        <textarea
                            name=""
                            placeholder="Опиши детально картинку"
                            className="promt-input"
                            required
                            autoFocus
                        ></textarea>
                        <button type="button" className="promt-btn">
                            <i className="fa-solid fa-dice"></i>
                        </button>

                        {/* promt action/buttons */}
                        <div className="promt-actions">
                            <div className="select-wrapper">
                                <select className="custom-select" required>
                                    <option value="" selected disabled>
                                        Select Model
                                    </option>
                                    <option value="black-forest-labs/FLUX.1-dev">
                                        FLUX.1-dev
                                    </option>
                                    <option value="black-forest-lavs/FLUX.1-schenll">
                                        FLUX.1-schenll
                                    </option>
                                    <option value="stabilityai/stable-diffusion-xl-base-1">
                                        Stable Diffusion XL
                                    </option>
                                    <option value="runwayml/stable-diffusion-v1-5">
                                        Stable Diffusion v1.5
                                    </option>
                                    <option value="prompthero/openjourney">
                                        Openjourney
                                    </option>
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select className="custom-select" required>
                                    <option value="" selected disabled>
                                        Колличество картинок
                                    </option>
                                    <option value="1">1 картинка</option>
                                    <option value="2">2 картинка</option>
                                    <option value="3">3 картинка</option>
                                    <option value="4">4 картинка</option>
                                </select>
                            </div>

                            <div className="select-wrapper">
                                <select className="custom-select" required>
                                    <option value="" selected disabled>
                                        Выберети размер
                                    </option>
                                    <option value="1/1">Квадрат (1:1)</option>
                                    <option value="16/9">Пеизаж (16:9)</option>
                                    <option value="9/16">Портрет (9:16)</option>
                                </select>
                            </div>

                            <button type="submit" className="generate-btn">
                                <i className="fa-solid fa-wand-sparkles"></i>
                                Сгенерировать
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
