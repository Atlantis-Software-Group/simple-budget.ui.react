import InputTextAreaProps from "./InputTextAreaProps";

export const InputTextArea = ({ 
    id,
    inputClass,
    placeholder,
    ariaLabel,
    value,
    rows = 3,
    required = false,
    onChange }: InputTextAreaProps) => {
    return (
        <textarea
            id={id ? id : ""}
            className={inputClass?.join()}
            placeholder={placeholder ? placeholder : ""}
            aria-label={ariaLabel ? ariaLabel : ""}
            value={value ? value : ""}
            rows={rows}
            required={required}
            onChange={onChange}
        />
    );
}