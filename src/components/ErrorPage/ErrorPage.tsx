import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return (
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, Can't find the page you are looking for</p>
                    <p>
                        <Link to={"/"}>Home</Link>
                    </p>
                </div>
            );
        } else {
            return (
                <div id="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                </div>
            );
        }
    } else if (error instanceof Error) {
        return (
            <div id="error-page">
                <h1>Oops! Unexpected Error</h1>
                <p>Something went wrong.</p>
                <p>
                    <i>{error.message}</i>
                </p>
            </div>
        );
    } else {
        return (<></>);
    }

}