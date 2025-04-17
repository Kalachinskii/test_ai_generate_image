export interface ITextaria {
    name: string;
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
    placeholderValue?: string;
}
