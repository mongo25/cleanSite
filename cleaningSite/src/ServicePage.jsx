import { useEffect, useState } from "react";
import SubpageBanner from "./components/SubpageBanner";
import Header from "./Header";
import Footer from "./Footer";

const ServicePage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
      console.log("scrollllleddd");
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`sticky-top main-menu-area ${
          scrolled ? "headerShadow" : ""
        }`}
      >
        <Header />
      </header>
      <SubpageBanner
        title="Our Services"
        description="Sometimes, there's just too much to do. Our maid service will take care of the housework. Sign up for recurring cleanings, and we'll run your errands too."
        textLink="Let us give you a hand"
      />
      <Footer />
    </>
  );
};

export default ServicePage;
