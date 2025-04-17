export interface IWrapperSelect {
    value: string;
    setSelect: React.Dispatch<React.SetStateAction<string>>;
    selectName: string;
    data: ISelectOption[];
}

interface ISelectOption {
    value: string;
    title: string;
}
