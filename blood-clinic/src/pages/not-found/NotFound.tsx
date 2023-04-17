import { useLocation } from 'react-router-dom';

function NotFound() {
    const location = useLocation();
    return (
        <div>
            <span className="flex items-center justify-center text-7xl">
        Sorry, the page {location.pathname} could not be found.
            </span>
        </div>
    );
}

export default NotFound;
