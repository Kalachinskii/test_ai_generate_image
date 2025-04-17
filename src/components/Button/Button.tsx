import { IButton } from "./IButton";

export function Button({
    children,
    func,
    type = "button",
    className,
}: IButton) {
    return (
        <>
            <button onClick={func} type={type} className={className}>
                {children}
            </button>
        </>
    );
}
