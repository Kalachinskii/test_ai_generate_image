import { ITextaria } from "./ITextaria";
import styles from "./Textaria.module.css";

export function Textaria({
    name,
    prompt,
    setPrompt,
    placeholderValue,
}: ITextaria) {
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
    };

    return (
        <>
            <textarea
                name={name}
                placeholder={placeholderValue}
                className={styles.promptInput}
                required
                autoFocus
                value={prompt}
                onChange={handleInputChange}
            ></textarea>
        </>
    );
}
