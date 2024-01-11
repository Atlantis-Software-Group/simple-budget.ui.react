import { InputFieldLabelType } from "./InputFieldLabelType";
import { InputFieldType } from "./InputFieldType";


export type InputFieldProps = {
    id?: string | null,
    type: InputFieldType,
    label?: InputFieldLabelType | null,
    inputClass?: string[] | null,
    placeholder?: string | null,
    ariaLabel?: string | null,
    value?: string,
    required?: boolean,
    invalidFeedback?: string | null,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}