function Footer() {

  const quickLinks = [
    "Home",
    "About",
    "How It Works",
    "Impact",
    "Contact"
  ];

  const supportLinks = [
    "Help Center",
    "Privacy Policy",
    "Terms & Conditions",
    "FAQ"
  ];

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <h2>
            🌿 FoodRescue
          </h2>

          <p>
            Good Food. Brighter Tomorrows.
          </p>

          <p>
            Connecting surplus food with people in need.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          {quickLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}

        </div>

        <div className="footer-column">

          <h3>Support</h3>

          {supportLinks.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}

        </div>

        <div className="footer-impact">

          <h3>Together</h3>

          <p>
            We can reduce food waste
            and build a hunger-free world.
          </p>

          <div className="social-icons">
            🌐 📘 📸 💼
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 FoodRescue. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;