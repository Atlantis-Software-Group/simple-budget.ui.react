import { RouteObject } from "react-router";
import App from "./components/App/App";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Transactions from "./components/Transactions/Transactions";

export const Routes: RouteObject[] = [
    {
        id: "root",
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                id: "Home",
                element: <Home />,
                index: true,                
            },
            {
                id: "Transactions",
                path: "transactions",
                element: <Transactions />
            }
        ]
    }
];