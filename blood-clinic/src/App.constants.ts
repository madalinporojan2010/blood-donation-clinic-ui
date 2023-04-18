import { FooterContent, FooterProps } from './components/footer/footer-types';
import { Page } from './components/nav-bar/nav-bar-types';

export const PAGES: Page[] = [
    { name: 'Home', link: '/' },
    { name: 'Donate', link: '/donate' },
    { name: 'Contact', link: '/contact' },
    { name: 'Sign in', link: '/ignore' }
];

export const APP_TITLE = 'Hemacare';

const company: FooterContent = {
    title: 'Company',
    contents: [
        {
            title: 'About',
            link: ''
        },
        {
            title: 'Careers',
            link: ''
        },
        {
            title: 'Brand Center',
            link: ''
        },
        {
            title: 'Blog',
            link: ''
        }
    ]
};

const helpCenter: FooterContent = {
    title: 'Help Center',
    contents: [
        {
            title: 'Twitter',
            link: ''
        },
        {
            title: 'Facebook',
            link: ''
        },
        {
            title: 'Contact Us',
            link: ''
        }
    ]
};

const legal: FooterContent = {
    title: 'Legal',
    contents: [
        {
            title: 'Privacy Policy',
            link: ''
        },
        {
            title: 'Licensing',
            link: ''
        },
        {
            title: 'Terms &amp; Conditions',
            link: ''
        }
    ]
};

export const FOOTER_PROPS: FooterProps = {
    copyrightTitle: 'Hemacare™',
    copyrightYear: 2023,
    facebookLink: '',
    instagramLink: '',
    twitterLink: '',
    gitHubLink: '',
    footerContents: [
        company,
        helpCenter,
        legal
    ]
};
 