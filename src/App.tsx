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

            <div className={styles.mainContent}>
                <form action="#" className="promt-form">
                    {/* promt container */}
                    <div className={styles.promtContainer}>
                        <textarea
                            name=""
                            placeholder="Опиши детально картинку"
                            className={styles.promtInput}
                            required
                            autoFocus
                        ></textarea>
                        <button type="button" className={styles.promtBtn}>
                            <i className="fa-solid fa-dice"></i>
                        </button>

                        {/* promt action/buttons */}
                        <div className={styles.promtActions}>
                            <div className={styles.selectWrapper}>
                                <select
                                    className={styles.customSelect}
                                    required
                                >
                                    <option value="" selected disabled>
                                        Выберети модель
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

                            <div className={styles.selectWrapper}>
                                <select
                                    className={styles.customSelect}
                                    required
                                >
                                    <option value="" selected disabled>
                                        Колличество
                                    </option>
                                    <option value="1">1 картинка</option>
                                    <option value="2">2 картинка</option>
                                    <option value="3">3 картинка</option>
                                    <option value="4">4 картинка</option>
                                </select>
                            </div>

                            <div className={styles.selectWrapper}>
                                <select
                                    className={styles.customSelect}
                                    required
                                >
                                    <option value="" selected disabled>
                                        Размер
                                    </option>
                                    <option value="1/1">Квадрат (1:1)</option>
                                    <option value="16/9">Пеизаж (16:9)</option>
                                    <option value="9/16">Портрет (9:16)</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className={styles.generateBtn}
                            >
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
