import { IWrapperSelect } from "./IWrapperSelect";
import styles from "./WrapperSelect.module.css";

export function WrapperSelect({
    setSizeSelect,
    sizeSelect,
    selectName,
}: IWrapperSelect) {
    const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSizeSelect(event.target.value);
    };

    return (
        <div className={styles.selectWrapper}>
            <select
                name={selectName}
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
    );
}
