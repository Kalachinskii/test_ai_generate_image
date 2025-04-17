import { ISelect } from "./ISelect";
import styles from "./ImageCountSelect.module.css";

export function ImageCountSelect({
    countSelect,
    setCountSelect,
    selectName,
}: ISelect) {
    const handleCountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCountSelect(Number(event.target.value));
    };

    return (
        <div className={styles.selectWrapper}>
            <select
                name={selectName}
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
    );
}
