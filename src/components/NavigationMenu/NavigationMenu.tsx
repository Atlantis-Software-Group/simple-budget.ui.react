import { RouteObject } from 'react-router';
import { Routes } from '../../routes';
import { useEffect, useState } from 'react';
import NavigationMenuItem from './NavigationMenuItem';

export default function NavigationMenu() {

    const [MenuItems, SetMenuItems] = useState<RouteObject[]>([]);

    useEffect(() => {
        const menuItems: RouteObject[] = Routes[0].children ?? [];
        SetMenuItems(menuItems);
    }, [])

    return (
        <>
            <nav className="navbar nav-underline bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {MenuItems.map((route) => <NavigationMenuItem key={route.id} Route={route} />)}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}