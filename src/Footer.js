import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      {/* ---------- Subscribe Banner ---------- */}
      <div className="subscribe-container">
        <h3>
          Stay Updated with <span>Exclusive Deals</span>
        </h3>
        <p>
          Get premium offers, insider travel tips, and luxury accommodations
          delivered directly to your inbox.
        </p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* ---------- Footer Content ---------- */}
      <div className="footer-content">
        <div className="footer-column brand-column">
          <div className="brand">
            <div className="brand-icon">🏠</div>
            <h4>RoomSearch</h4>
          </div>
          <p>
            Discover extraordinary spaces around the world. From luxury
            apartments to boutique hotels, we curate the perfect accommodations
            for discerning travelers.
          </p>
          <ul className="contact-info">
            <li>📞 +1 (555) 123-4567</li>
            <li>📧 support@roomsearch.com</li>
            <li>📍 123 Travel Street, San Francisco, CA 94102</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Support</h5>
          <ul>
            <li>Help Center</li>
            <li>Safety Information</li>
            <li>Cancellation Options</li>
            <li>Contact Us</li>
            <li>Report Issue</li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Hosting</h5>
          <ul>
            <li>Host Your Home</li>
            <li>Host Resources</li>
            <li>Host Guidelines</li>
            <li>Host Protection</li>
            <li>Host Academy</li>
          </ul>
        </div>
      </div>

      {/* ---------- Bottom Bar ---------- */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms of Service</a>•
          <a href="#">Privacy Policy</a>•
          <a href="#">Cookie Policy</a>•
          <a href="#">Copyright Policy</a>•
          <a href="#">Accessibility</a>
        </div>

        <div className="social-icons">
          <span>🌐</span>
          <span>🐦</span>
          <span>📸</span>
          <span>💼</span>
        </div>
      </div>

      <div className="footer-end">
        <p>© 2025 RoomSearch Inc. All rights reserved.</p>
        <p>🌍 English (US) • 💲 USD</p>
        <p className="support">🟢 24/7 Premium Support: +1 (555) 123-4567</p>
      </div>
    </footer>
  );
}

export default Footer;
