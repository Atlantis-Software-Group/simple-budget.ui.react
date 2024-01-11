import { PropsWithChildren } from "react";
import { ColumnProps } from "./ColumnProps";

export const Column = ({children}: PropsWithChildren<ColumnProps>) => {
    return(
        <div className="col">
            {children}
        </div>
    );
}