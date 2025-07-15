import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpg";
import Project3 from "../assets/images/project-3.jpg";
import Project4 from "../assets/images/project-4.jpg";
import "../styles/portfolioCarousel.scss";

const portfolioData = [
  {
    image: Project1,
    title: "Guadalajara Grill – Restaurant Website Revamp",
    category:
      "A modern, mobile-friendly website designed for Guadalajara Grill in Danville, California. This build focuses on vibrant imagery, smooth navigation, and easy access to menus and contact info — built with WordPress and Elementor",
  },
  {
    image: Project2,
    title: "Pressure Wash Parts – E-commerce & Product Showcase Website",
    category:
      "A clean and conversion-focused website built for Pressure Wash Parts, featuring a streamlined product catalog, user-friendly navigation, and mobile-optimized design. Wordpress + Elementor + Woocommerce",
  },
  {
    image: Project3,
    title: "Pancho’s Taqueria – Mexican Restaurant Website Design",
    category:
      "A vibrant, culturally inspired website crafted for Pancho’s Taqueria, blending bold visuals with easy navigation and mobile responsiveness. This design highlights the restaurant’s authentic flavor, showcases menus, and makes reservations and contact info quickly accessible.",
  },
  {
    image: Project4,
    title: "Xooker – Gamified Loyalty & Deals Platform",
    category:
      "Built in WordPress with Elementor, this site delivers a bold, user-focused experience for Xooker’s gamified deals platform. I also implemented on-page SEO best practices, including optimized meta tags, structured headings, and schema for better search visibility.",
  },
];

const PortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? portfolioData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === portfolioData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="portfolio-carousel">
      <div className="header">
        <h2>WEBSITE PORTFOLIO</h2>
        <p>
          My design process is rooted in clarity, creativity, and purpose. From
          the first concept to the final pixel, every detail is crafted to
          deliver real impact and seamless user experience.
        </p>

        <div className="nav-buttons">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 64}%)` }}
        >
          {portfolioData.map((item, index) => (
            <div className="carousel-slide" key={item.title}>
              <motion.img
                src={item.image}
                alt={item.title}
                className="carousel-image"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
              />
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={portfolioData[currentIndex].title}
            className="carousel-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>{portfolioData[currentIndex].title}</h3>
            <span>{portfolioData[currentIndex].category}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioCarousel;
