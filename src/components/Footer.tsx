import "../styles/main.scss";

const Footer = () => {
  const handleSCrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <p style={{ textAlign: "center" }}>© 2025 JSAYON. All rights reserved.</p>
      <div className="back-to-top button-container">
        <button
          onClick={handleSCrollToTop}
          className="back-to-top-btn btn-primary"
        >
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
