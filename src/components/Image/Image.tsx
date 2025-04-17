import { Spinner } from "../Spinner/Spinner";
import styles from "./Image.module.css";

interface ImgUrl {
    imgUrl: string;
    loading: boolean;
}

export function Image({ imgUrl, loading }: ImgUrl) {
    return (
        <>
            {/* ${styles.loading} */}
            {/* ${styles.error} */}
            <div className={`${styles.imgCard} ${loading && styles.loading}`}>
                <div className={`${styles.statusContainer} ${styles.logoIcon}`}>
                    <Spinner />
                    <i className="fa-solid fa-triangle-exclamation"></i>
                    <p className={`${styles.statusText} ${styles.logoIcon}`}>
                        Генерация...
                    </p>
                </div>
                <img
                    className={styles.resultImg}
                    src={imgUrl}
                    alt="Сгенерировання картинка"
                />
                <div className={styles.imgOverlay}>
                    <a
                        href={imgUrl}
                        download={`${Date.now()}.png`}
                        className={styles.imgDownloadBtn}
                    >
                        <i
                            className={`${"fa-solid fa-download"} ${
                                styles.logoIcon
                            }`}
                        ></i>
                    </a>
                </div>
            </div>
        </>
    );
}
