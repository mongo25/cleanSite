import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OurPricePage from "./OurPricePage";
import FaqPage from "./FaqPage";
import ServicePage from "./ServicePage";
import AboutPage from './AboutPage';
import ContactPage from "./ContactPage";
import CheckoutPage from "./CheckoutPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/ourPrice" element={<OurPricePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    )
}

export default MainRoutes;