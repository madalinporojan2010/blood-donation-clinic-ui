import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PAGES } from './App.constants';
import NavBar from './components/nav-bar/nav-bar';
import Contact from './pages/contact/Contact';
import Donate from './pages/donate/Donate';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';

function App() {
    return (
        <BrowserRouter>
            <NavBar pages={PAGES} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
