import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/icons/logo-icon.svg';
import { NavBarProps, Page } from './nav-bar-types';
function NavBar(props: NavBarProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const setPages = (pages: Page[]) => {
        const highlightCurrentPage = (page: Page) => {
            const linkRegEx = new RegExp(`${page.link}$`);
            const margins = 'sblock py-2 pl-3 pr-4';
            if (linkRegEx.test(location.pathname)) {
                return `${margins} text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`;
            } else {
                return `${margins} text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`;
            }
        };

        return pages.map((page) => (
            <li key={page.name}>
                <button
                    type="button"
                    onClick={() => {
                        if (!page.name.includes('sign in')) {
                            navigate(page.link);
                        }
                    }}
                    className={highlightCurrentPage(page)}
                >
                    {page.name}
                </button>
            </li>
        ));
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href={props.pages[0].link}
                        className="flex items-center [&>span>:last-child]:hover:text-blue-700"
                    >
                        <LogoSVG className="logo h-8 mr-3"></LogoSVG>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-700">
                hema
                            </span>
                            <span>.care</span>
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {setPages(props.pages)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
