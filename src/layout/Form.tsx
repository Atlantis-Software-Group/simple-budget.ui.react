import { PropsWithChildren } from "react";
import { FormProps } from "./FormProps";

export const Form = ({additionalClasses = [], onSubmit,children}: PropsWithChildren<FormProps>) => {
    const cssClasses: string[] = ["row"];

    if ( additionalClasses?.length > 0 )
    {
        additionalClasses.map((cssClass:string) => { cssClasses.push(cssClass); })
    }    

    return (
        <form onSubmit={onSubmit} className={cssClasses.join(' ')} noValidate>
            {children}            
        </form>
    );
}