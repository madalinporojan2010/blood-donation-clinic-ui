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
            <nav className="border-gray-200 bg-white dark:bg-gray-900">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a
                        href={props.pages[0].link}
                        className="flex items-center [&>span>:last-child]:hover:text-blue-700"
                    >
                        <LogoSVG className="mr-3 h-8"></LogoSVG>
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text font-extrabold text-transparent">
                hema
                            </span>
                            <span>.care</span>
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
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
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                            {setPages(props.pages)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
