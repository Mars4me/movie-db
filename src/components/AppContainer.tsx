import { BrowserRouter } from 'react-router-dom';
import { Body } from '../layouts/body';
import { Footer } from '../layouts/footer';
import { Header } from '../layouts/header';

export const AppContainer = () => {
    return (
        <div className="pb-[64px] ">
            <BrowserRouter>
                <Header />
                <Body />
                <Footer />
            </BrowserRouter>
        </div>
    );
};
