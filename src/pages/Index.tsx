import { useEffect } from "react";
import EventDetails from "../components/EventDetails";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import RsvpForm from "../components/RsvpForm";

const Index = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href")?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EventDetails />
      <RsvpForm />
      {/* <Gallery /> */}
      {/* <GiftRegistry /> */}
      <Footer />
    </div>
  );
};

export default Index;
