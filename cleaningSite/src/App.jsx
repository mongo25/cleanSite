import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainRoutes from "./MainRoutes";
import { useEffect, useState } from "react";
// import NotFoundPage from './NotFoundPage';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Router>
      <header
        className={`sticky-top main-menu-area ${scrolled ? "headerShadow" : ""
          }`}
      >
        <Header />
      </header>
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
