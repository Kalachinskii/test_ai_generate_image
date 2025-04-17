import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Header.module.css";

export function Header() {
    const [themeToggle, setThemeToggle] = useState<string>(() => {
        return localStorage.getItem("theme") || "light";
    });

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

    return (
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

            <Button func={toggleTheme} className={styles.themeToggle}>
                <i
                    className={`${
                        themeToggle == "light"
                            ? `${"fa-solid fa-sun"} ${styles.sun}`
                            : `${"fa-solid fa-moon"} ${styles.moon}`
                    } ${styles.logoIcon}`}
                ></i>
            </Button>
        </div>
    );
}
