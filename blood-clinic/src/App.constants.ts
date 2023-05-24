import { FooterContent, FooterProps } from './components/footer/footer-types';
import { Page } from './components/nav-bar/nav-bar-types';

export const PAGES: Page[] = [
    { name: 'Home', link: '/' },
    { name: 'Donate', link: '/donate' },
    { name: 'Contact', link: '/contact' },
    { name: 'Staff Sign in', link: '/sign-in' }
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
        }
    ]
};

const helpCenter: FooterContent = {
    title: 'Help Center',
    contents: [
        {
            title: 'Twitter',
            link: 'https://twitter.com/'
        },
        {
            title: 'Facebook',
            link: 'https://facebook.com/'
        },
        {
            title: 'Contact Us',
            link: '/contact'
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
            title: 'Terms & Conditions',
            link: ''
        }
    ]
};

export const FOOTER_PROPS: FooterProps = {
    copyrightTitle: 'Hemacare™',
    copyrightYear: 2023,
    facebookLink: 'https://facebook.com/',
    instagramLink: 'https://instagram.com/',
    twitterLink: 'https://twitter.com/',
    gitHubLink: 'https://github.com/madalinporojan2010',
    footerContents: [
        company,
        helpCenter,
        legal
    ]
};
 