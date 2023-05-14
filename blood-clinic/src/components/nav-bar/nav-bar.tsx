import { CSSProperties, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as LogoSVG } from '../../assets/icons/logo-icon.svg';

import { motion } from 'framer-motion';
import useIsMobile from '../../hooks/is-mobile/is-mobile-hook';
import { useMobileMainMenuStatus } from '../../hooks/nav-bar/main-menu/mobile-main-menu-hook';
import { MainMenuHookFunc } from '../../hooks/nav-bar/main-menu/mobile-main-menu-types';
import { NavBarProps, Page } from './nav-bar-types';

const menuVariants = {
    open: {
        opacity: 1,
        y: 0
    },
    close: {
        opacity: 0,
        y: '-100%'
    }
    
};

function NavBar(props: NavBarProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useIsMobile();

    // mobile main menu
    const [mobileMenuOpened, mobileMenuFuncs] = useMobileMainMenuStatus(false);

    useLayoutEffect(() => {
        function updatePadding() {
            document.documentElement.style.setProperty('--navBar-padding', `${(elementRef.current?.clientHeight || 0)}px`);
        }
        window.addEventListener('resize', updatePadding);
        updatePadding();
    }, []);

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
            <li key={page.name} className='text-center' onClick={(mobileMenuFuncs as MainMenuHookFunc).setFalse}>
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

    const animateMobileMenu = () => {
        if(isMobile) {
            return (mobileMenuOpened as boolean) ? menuVariants.open : menuVariants.close;
        } else {
            return undefined;
        }
    }; 

    const svgMobileMainMenuState = () => {
        if((mobileMenuOpened as boolean)) {
            return 'translate-x-[3px] translate-y-[-1px] rotate-[0.125turn]';
        }
        return undefined;
    };

    const pathSvgMobileMenuState = (): CSSProperties => {
        if((mobileMenuOpened as boolean)) {
            return {strokeDasharray:'60 105 60 300', strokeDashoffset: '-90'}; 
        }
        return {strokeDasharray: '60 31 60 300'};
    };

    return (
        <section>
            <nav ref={elementRef} className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
                <div className=" mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
                    <a
                        href={props.pages[0].link}
                        className="flex items-center [&>span>:last-child]:hover:text-blue-700"
                    >
                        <LogoSVG className="mr-3 h-8 [&>.cls-1]:fill-red-700 [&>.cls-1]:dark:fill-[url(#gradient1)]"></LogoSVG>
                        <span className="inline-block animate-[glitch_1s_linear_infinite] self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            <span title="hema" className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text font-extrabold text-transparent before:absolute before:left-0 before:bg-gradient-to-r before:from-red-600 before:to-blue-700 before:bg-clip-text before:content-[attr(title)] ">
                hema
                            </span>
                            <span title=".care" className='after:absolute after:left-0 after:bg-gradient-to-r after:bg-clip-text after:text-red-600 after:content-[attr(title)]'>.care</span>
                        </span>
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-3 inline-flex items-center overflow-hidden rounded-lg  p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        aria-controls="navbar-default"
                        aria-expanded={mobileMenuOpened as boolean}
                        onClick={(mobileMenuFuncs as MainMenuHookFunc).setToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        {/* <svg
                            className="h-6 w-6"
                            aria-hidden={!(mobileMenuOpened as boolean)}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg> */}

                        <svg stroke="currentColor" fill="none" className={`${svgMobileMainMenuState()} transition-transform duration-1000`} viewBox="-10 -10 120 120" height="35" >
                            
                            <path className="duration-1000" style={pathSvgMobileMenuState()} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                            </path>
                        </svg>
                    </button>        
                    <motion.div hidden={!(mobileMenuOpened as boolean) && isMobile} animate={animateMobileMenu()} variants={menuVariants} className="w-full md:block md:w-auto" id="navbar-default">
                        <ul className=" mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                            {setPages(props.pages)}
                        </ul>
                    </motion.div>
                </div>
            </nav>
        </section>
    );
}


export default NavBar;
