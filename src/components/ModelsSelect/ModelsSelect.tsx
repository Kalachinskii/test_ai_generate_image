import { IModelsSelect } from "./IModelsSelect";
import styles from "./ModelsSelect.module.css";

export function ModelsSelect({
    modelSelect,
    setModelSelect,
    selectName,
}: IModelsSelect) {
    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setModelSelect(event.target.value);
    };

    return (
        <div className={styles.selectWrapper}>
            <select
                name={selectName}
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
                <option value="black-forest-labs/FLUX.1-dev">FLUX.1-dev</option>
                <option value="stabilityai/stable-diffusion-xl-base-1.0">
                    SD-XL 1.0-base Model Card
                </option>
            </select>
        </div>
    );
}
