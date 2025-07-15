import "../styles/_hero.scss";
import "../styles/main.scss";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container container-hero">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-heading">
            Joseph Rey Sayon <br />
            <span className="hero-heading-subtle">
              Web Designer & WordPress Developer in the Philippines
            </span>
          </h1>

          <div className="hero-description">
            <p>
              I'm Joseph Sayon, a web designer and developer from the
              Philippines with over{" "}
              <strong>
                <em>10</em> years
              </strong>{" "}
              of experience creating clean, responsive, and conversion-focused
              websites. I specialize in WordPress (Divi, Elementor, custom
              themes/plugins), and also work with React, TypeScript, PHP, and
              SASS. I’m experienced in integrating websites with CRMs like
              GoHighLevel, Kajabi, Webflow, and Shopify, building landing pages,
              funnels, and tailored solutions for client needs.
            </p>
            <div className="label justify-content-end">
              <span className="tp-section-subtitle">ABOUT ME</span>
            </div>
            <div className="button-container">
              <a href="#" className="btn-primary">
                Want to connect?
              </a>
            </div>
          </div>
        </div>

        <div className="hero-symbol">
          {/* Add a logo or shape SVG if you want like Agntix */}
          <div className="triangle-symbol" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
