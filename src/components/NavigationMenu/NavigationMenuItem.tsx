import { RouteObject } from "react-router";
import { NavLink } from "react-router-dom";

export default function NavigationMenuItem (props: { Route: RouteObject }) {
    
    function determineNavLinkClasses(isActive: boolean, isPending: boolean): string {
        let classNameStr: string = "nav-link";

        if (isActive) {
            classNameStr += " active";
        }

        return classNameStr;
    }

    return (
        <li>
            <NavLink 
                to={props.Route.path ?? '/'}
                className={({isActive, isPending}) => determineNavLinkClasses(isActive, isPending)}
            >{props.Route.id}</NavLink>            
        </li>
    );
};