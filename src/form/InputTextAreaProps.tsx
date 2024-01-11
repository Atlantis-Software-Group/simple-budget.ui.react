export default interface InputTextAreaProps {
    id?: string,
    inputClass?: string[],
    placeholder?: string,
    ariaLabel?: string,
    value: string,
    rows?: number,
    required?: boolean,
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}