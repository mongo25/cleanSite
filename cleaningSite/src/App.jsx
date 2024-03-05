import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import OurPricePage from "./OurPricePage";
import FaqPage from "./FaqPage";
import ServicePage from "./ServicePage";
// import AboutPage from './AboutPage';
// import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/OurPrice" element={<OurPricePage />} />

        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
