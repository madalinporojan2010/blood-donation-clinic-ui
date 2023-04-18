import { useLocation } from 'react-router-dom';

function NotFound() {
    const location = useLocation();
    return (
        <div>
            <h2 className="mt-10 flex items-center justify-center text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Sorry, the page {location.pathname} could not be found.
            </h2>
        </div>
    );
}

export default NotFound;
