import { InputFieldProps } from "./inputFieldProps";

export const InputField = ({type, 
                            id,                             
                            label = { 
                                className: ["form-label"]
                             }, 
                            inputClass = ["form-control"], 
                            placeholder, 
                            ariaLabel, 
                            value,
                            required = true,
                            invalidFeedback,
                            onChange}: InputFieldProps) => {    
    return (
        <>
            <input 
                id={id ? id : undefined}
                type={type}
                className={inputClass?.join(' ')}
                placeholder={placeholder ? placeholder : undefined}
                aria-label={ariaLabel ? ariaLabel : undefined}
                value={value}
                onChange={onChange}
                required={required}
                />              
              
            {required && invalidFeedback !== null && <div className="invalid-feedback">
                {invalidFeedback}
            </div>}
        </>
    );
}