import { motion } from "framer-motion";
import { useState } from "react";
import "../styles/_about.scss";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import photo from "../assets/images/your-photo.jpg";
import { FaSearch, FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiGooglesearchconsole,
  SiLaravel,
  SiPhp,
  SiWordpress,
  SiShopify,
  SiSass,
} from "react-icons/si";
import Experience from "./Experience";

// Updated icon array
const icons = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaJs />,
  <FaReact />,
  <SiPhp />,
  <SiWordpress />,
  <SiSass />,
  <SiGooglesearchconsole />, // or FaSearch
  <SiLaravel />,
  <FaSearch />, // SEO fallback
  <SiShopify />,
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = icons.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };
  const textItems = [
    "Work Experiences",
    "Work Experiences",
    "Work Experiences",
    "Educational Background",
    "Educational Background",
    "Educational Background",
  ];
  return (
    <div className="about-wrapper">
      {/* Platforms I used section  */}
      <section className="about-section">
        <div className="gradient-bg" />

        <motion.div
          className="tech-icons-bubbles"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {icons.map((Icon, idx) => (
            <div
              className="icon-bubble"
              key={idx}
              style={{
                top: `${10 + (idx % 3) * 30}%`,
                left: `${10 + ((idx * 12) % 80)}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="bubble-icon">{Icon}</div>
            </div>
          ))}
        </motion.div>
        <div className="text-stack">
          <motion.h2
            className="headline"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LANGUAGES OR PLATFORMS THAT I USE
          </motion.h2>
        </div>
        <div className="carousel-wrapper">
          <motion.div
            className="carousel-track"
            animate={{ x: `-${currentIndex * (100 / icons.length)}%` }}
            transition={{ duration: 0.5 }}
          >
            {icons.map((Icon, idx) => (
              <div className="carousel-slide" key={idx}>
                <div className="bubble-icon">{Icon}</div>
              </div>
            ))}
          </motion.div>

          <div className="carousel-controls">
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <section className="about-me-section">
        <div className="content-wrapper">
          <div className="image-stack">
            <img src={photo} alt="JSAYON Portrait" className="photo" />
          </div>

          <div className="text-content">
            <p className="subheading">RESUME</p>
            <h2>
              Personal <span className="highlight">Objective</span>
            </h2>
            <p className="description">
              Seeking an affiliation that will best utilize my 10 years of
              experience as a web developer and designer, providing an
              opportunity to share my expertise and skills.
            </p>
            <div className="button-container">
              <a href="tel:+639173174720" className="btn-primary">
                <FiPhoneCall style={{ marginRight: "0.5rem" }} />
                CONTACT ME
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <FiMail className="icon" />
                <span>josephjeremae@gmail.com</span>{" "}
                {/* ← Replace with your email */}
              </div>
              <div className="contact-item">
                <FiMapPin className="icon" />
                <span>Cebu City, Philippines</span>{" "}
                {/* ← Replace with your location */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Experience Wrapper */}
      <div className="experience-wrapper">
        <div className="banner-wrapper">
          <h2>WORK EXPERIENCES</h2>
          <Experience />
          <div className="marquee banner--primary">
            <div className="marquee-track">
              {textItems.map((textItem, i) => (
                <span key={i}>{textItem} • </span>
              ))}
              {textItems.map((textItem, i) => (
                <span key={`dupe-${i}`}>{textItem} • </span>
              ))}
            </div>
          </div>

          <div className="marquee banner--secondary">
            <div className="marquee-track reverse">
              {textItems.map((textItem, i) => (
                <span key={i}>{textItem} • </span>
              ))}
              {textItems.map((textItem, i) => (
                <span key={`dupe2-${i}`}>{textItem} • </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/**Educational Background Section */}
      <div className="education-wrapper">
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2>
            Educational <span className="highlight">Background</span>
          </h2>

          <div className="education-list">
            <div className="education-item">
              <div className="edu-meta">
                <strong>2000 - 2006</strong>
                <span>Elementary</span>
              </div>
              <div className="edu-content">
                <p>Minglanilla Central School</p>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-meta">
                <strong>2006 - 2010</strong>
                <span>High School</span>
              </div>
              <div className="edu-content">
                <p>University Of The Visayas – Minglanilla Campus</p>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-meta">
                <strong>2010 - 2015</strong>
                <span>College</span>
              </div>
              <div className="edu-content">
                <p>Cebu Institute of Technology – University</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
