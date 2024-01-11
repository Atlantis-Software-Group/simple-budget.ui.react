import { PropsWithChildren } from "react";
import { LabelProps } from "./LabelProps";

export const Label = ({htmlFor, ariaLabel, additionalClasses, children }: PropsWithChildren<LabelProps>) => {
    const cssClasses: string[] = [];
    cssClasses.push("form-label");
    if (additionalClasses) {
        additionalClasses.map(cssClass => { 
            cssClasses.push(cssClass) 
        });
    }

    return (
        <label htmlFor={htmlFor} aria-label={ariaLabel} className={cssClasses.join(' ')}>
            {children}
        </label>
    );
};