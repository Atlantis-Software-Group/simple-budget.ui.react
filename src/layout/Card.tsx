import { PropsWithChildren } from "react";
import { CardProps } from "./CardProps";

export const Card = ({header, children}: PropsWithChildren<CardProps>) => {
    const displayHeader: boolean = header ? true : false;
    
    return (
        <div className="card">
            {displayHeader && (<div className="card-header">{header}</div>)}
            <div className="card-body">
                {children}
            </div>
        </div>
    );
};