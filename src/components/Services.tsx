import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollMagic from "scrollmagic";
import "../styles/_services.scss";
import WebImage from "../assets/images/sass.png";
import ProductImage from "../assets/images/html5.png";
import DevImage from "../assets/images/wordpress.png";
import BrandImage from "../assets/images/css3.png";

const services = [
  {
    number: "01.",
    title: "WEB DESIGN",
    desc: "Whether you need stunning visuals for your website, captivating graphics for your marketing materials, or innovative UI/UX designs for your app, our team of experts is here to turn your vision into reality.",
    tags: ["UX DESIGN", "USER TESTING", "MOTION DESIGN", "PRODUCT PROTOTYPE"],
    image: WebImage,
  },
  {
    number: "02.",
    title: "GRAPHIC DESIGN",
    desc: "Our product design services focus on creating intuitive and aesthetically pleasing products that resonate with your audience and stand out in the market.",
    tags: [],
    image: ProductImage,
  },
  {
    number: "03.",
    title: "WEB DEVELOPMENT",
    desc: "From websites to custom systems, our development team has the expertise to bring your ideas to life.",
    tags: [
      "UX DESIGN",
      "FRONTEND",
      "BACKEND",
      "E-COMMERCE",
      "NO CODE / LOW CODE",
    ],
    image: DevImage,
  },
  {
    number: "04.",
    title: "SEO",
    desc: "Boost your online visibility with our expert SEO services. We help businesses rank higher on search engines through strategic keyword research, on-page optimization, technical SEO, and high-quality link building. Whether you're a local business or a global brand, we tailor data-driven strategies to increase traffic, generate leads, and drive long-term growth.",
    tags: [
      "SEO STRATEGY",
      "ON-PAGE SEO",
      "OFF-PAGE SEO",
      "LOCAL SEO",
      "KEYWORD RESEARCH",
      "WEBSITE AUDIT",
      "PAGE SPEED OPTIMIZATION",
    ],
    image: BrandImage,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const items = sectionRef.current?.querySelectorAll(".service-item");

    items?.forEach((item) => {
      const timeline = gsap.timeline();

      timeline.fromTo(
        item,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 1 }
      );

      new ScrollMagic.Scene({
        triggerElement: item,
        triggerHook: 0,
        duration: "100%", // Scroll distance while pinned
      })
        .setPin(item as HTMLElement, { pushFollowers: false })
        .setTween(timeline)
        .addTo(controller);
    });

    return () => controller.destroy(true);
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="section-label hover-swap">
        <span className="default-text">PORTFOLIO</span>
        <span className="hover-text">WEBSITES I BUILT</span>
      </div>

      {services.map((service, index) => (
        <div className="service-item" key={index}>
          <div className="service-content">
            <div className="service-text">
              <span className="service-number">{service.number}</span>
              <h2 className="service-title">{service.title}</h2>
              <p className="service-desc">{service.desc}</p>
              <div className="button-container">
                <a href="#services" className="btn-primary">
                  INQUIRE NOW <span>↗</span>
                </a>
              </div>
              <div className="service-tags">
                {service.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
