export interface FooterProps {
    copyrightTitle: string;
    copyrightYear: number;

    footerContents: FooterContent[];

    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    gitHubLink: string;
}

export interface FooterSubContent {
    title: string;
    link: string;
}

export interface FooterContent {
    title: string;
    contents: FooterSubContent[];
}