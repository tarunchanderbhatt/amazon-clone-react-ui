import React from 'react';
import './Footer.css';
import amazonLogo from "../assets/logo-sprite.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Back to Top Bar */}
      <div className="footer-back-to-top" onClick={scrollToTop}>
        Back to top
      </div>

      {/* Main Link Columns Container */}
      <div className="footerContent">
        <div className="footer-columns-grid">
          
          {/* Column 1: Get to Know Us */}
          <div className="footerContentWrapper">
            <div className="contentFooterTitle">Get to Know Us</div>
            <div className="contentFooterSubTitlediv">
              <div className="contentFooterSubTitleCont"><a href="#about">About Amazon</a></div>
              <div className="contentFooterSubTitleCont"><a href="#careers">Careers</a></div>
              <div className="contentFooterSubTitleCont"><a href="#press">Press Releases</a></div>
              <div className="contentFooterSubTitleCont"><a href="#science">Amazon Science</a></div>
            </div>
          </div>

          {/* Column 2: Connect with Us */}
          <div className="footerContentWrapper">
            <div className="contentFooterTitle">Connect with Us</div>
            <div className="contentFooterSubTitlediv">
              <div className="contentFooterSubTitleCont"><a href="#facebook">Facebook</a></div>
              <div className="contentFooterSubTitleCont"><a href="#twitter">Twitter</a></div>
              <div className="contentFooterSubTitleCont"><a href="#instagram">Instagram</a></div>
            </div>
          </div>

          {/* Column 3: Make Money with Us */}
          <div className="footerContentWrapper">
            <div className="contentFooterTitle">Make Money with Us</div>
            <div className="contentFooterSubTitlediv">
              <div className="contentFooterSubTitleCont"><a href="#sell">Sell on Amazon</a></div>
              <div className="contentFooterSubTitleCont"><a href="#accelerator">Sell under Amazon Accelerator</a></div>
              <div className="contentFooterSubTitleCont"><a href="#protect">Protect and Build Your Brand</a></div>
              <div className="contentFooterSubTitleCont"><a href="#global">Amazon Global Selling</a></div>
              <div className="contentFooterSubTitleCont"><a href="#supply">Supply to Amazon</a></div>
              <div className="contentFooterSubTitleCont"><a href="#affiliate">Become an Affiliate</a></div>
              <div className="contentFooterSubTitleCont"><a href="#fulfilment">Fulfilment by Amazon</a></div>
              <div className="contentFooterSubTitleCont"><a href="#advertise">Advertise Your Products</a></div>
              <div className="contentFooterSubTitleCont"><a href="#pay">Amazon Pay on Merchants</a></div>
            </div>
          </div>

          {/* Column 4: Let Us Help You */}
          <div className="footerContentWrapper">
            <div className="contentFooterTitle">Let Us Help You</div>
            <div className="contentFooterSubTitlediv">
              <div className="contentFooterSubTitleCont"><a href="#account">Your Account</a></div>
              <div className="contentFooterSubTitleCont"><a href="#returns">Returns Centre</a></div>
              <div className="contentFooterSubTitleCont"><a href="#safety">Recalls and Product Safety Alerts</a></div>
              <div className="contentFooterSubTitleCont"><a href="#protection">100% Purchase Protection</a></div>
              <div className="contentFooterSubTitleCont"><a href="#app">Amazon App Download</a></div>
              <div className="contentFooterSubTitleCont"><a href="#help">Help</a></div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-divider"></div>

      {/* Middle Bar: Logo & Region Pickers */}
      <div className="footerContentAmazonlogo">
        <div className='footerAmazonWrapper'>
          <div
            className="amazon-sprite-logo"
            title="Amazon Logo"
            style={{ backgroundImage: `url(${amazonLogo})` }}
          ></div>
          <span className="footer-amazonInLogo">.in</span>
          
          <div className="footer-selectors">
            <div className="footer-selector-btn">
              <span>🌐 English</span>
              <span className="selector-arrow">▾</span>
            </div>
            <div className="footer-selector-btn">
              <span>🇮🇳 India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-brands Directory */}
      <div className="footer-sub-brands-section">
        <div className="footer-brands-grid">
          <div className="brand-item">
            <a href="#abebooks">
              <strong>AbeBooks</strong>
              <span>Books, art<br />& collectibles</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#aws">
              <strong>Amazon Web Services</strong>
              <span>Scalable Cloud<br />Computing Services</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#audible">
              <strong>Audible</strong>
              <span>Download<br />Audio Books</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#imdb">
              <strong>IMDb</strong>
              <span>Movies, TV<br />& Celebrities</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#shopbop">
              <strong>Shopbop</strong>
              <span>Designer<br />Fashion Brands</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#business">
              <strong>Amazon Business</strong>
              <span>Everything For<br />Your Business</span>
            </a>
          </div>
          <div className="brand-item">
            <a href="#music">
              <strong>Amazon Music</strong>
              <span>Stream millions of<br />songs</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="footer-bottom-legal">
        <div className="footer-legal-links">
          <a href="#conditions">Conditions of Use & Sale</a>
          <a href="#privacy">Privacy Notice</a>
          <a href="#interest">Interest-Based Ads</a>
        </div>
        <div className="footer-copyright">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;