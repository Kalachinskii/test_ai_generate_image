import { IWrapperSelect } from "./ISelect";
import styles from "./Select.module.css";

export function Select({ setSelect, value, selectName, data }: IWrapperSelect) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.target.value);
    };

    // const data = [
    //     { value: "", title: "Размер" },
    //     { value: "1/1", title: "Квадрат (1/1)" },
    //     { value: "16/9", title: "Пеизаж (16/9)" },
    //     { value: "9/16", title: "Портрет (9/16)" },
    // ];

    return (
        <div className={styles.selectWrapper}>
            <select
                name={selectName}
                className={styles.customSelect}
                required
                value={value}
                onChange={handleChange}
            >
                {data.map((element, index) => (
                    <option
                        disabled={!index}
                        key={element.value}
                        value={element.value}
                    >
                        {element.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
