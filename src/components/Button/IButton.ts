export interface IButton {
    children: React.ReactNode;
    func?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
}
