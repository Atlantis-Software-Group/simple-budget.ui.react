import { BaseProps } from "../layout/BaseProps";

export interface LabelProps extends BaseProps {
    htmlFor?: string,
    ariaLabel?: string
}