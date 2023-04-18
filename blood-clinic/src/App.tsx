import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FOOTER_PROPS, PAGES } from './App.constants';
import Footer from './components/footer/footer';
import NavBar from './components/nav-bar/nav-bar';
import Contact from './pages/contact/Contact';
import Donate from './pages/donate/Donate';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

function App() {
    return (
        <BrowserRouter>
            <div className="flex h-screen flex-col justify-between">
                <NavBar pages={PAGES} />
                <div className="mb-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
                <Footer copyrightTitle={FOOTER_PROPS.copyrightTitle} copyrightYear={FOOTER_PROPS.copyrightYear} footerContents={FOOTER_PROPS.footerContents} facebookLink={FOOTER_PROPS.facebookLink}
                    gitHubLink={FOOTER_PROPS.gitHubLink} instagramLink={FOOTER_PROPS.instagramLink} twitterLink={FOOTER_PROPS.twitterLink} />
            </div>
        </BrowserRouter>
    );
}

export default App;
