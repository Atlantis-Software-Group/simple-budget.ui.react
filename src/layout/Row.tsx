import type { PropsWithChildren, ReactNode } from "react";
import { RowProps } from "./RowProps";
import React from "react";

export const Row = ({ additionalClasses = [], children }: PropsWithChildren<RowProps>) => {
    const cssClasses: string[] = ["row"];

    if (additionalClasses?.length > 0) {
        additionalClasses.map((cssClass: string) => { cssClasses.push(cssClass); })
    }

    return (
        <div className={cssClasses.join(' ')}>            
            { children }
        </div>
    );
}