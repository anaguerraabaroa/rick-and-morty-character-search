import React from "react";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <small className="footer__small">@2020. Ana Guerra Abaroa</small>
      <nav className="footer__menu" role="navigation">
        <ul className="footer__menu--logos">
          <li className="logo">
            <a
              href="https://github.com/anaguerraabaroa"
              title="Link to Ana Guerra Abaroa github"
              target="_blank"
              rel="noreferrer"
              className="github"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="logo">
            <a
              href="https://www.linkedin.com/in/anaguerraabaroa/"
              title="Link to Ana Guerra Abaroa linkedin"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="log">
            <a
              href="https://twitter.com/anaguerraabaroa"
              title="Link to Ana Guerra Abaroa twitter"
              target="_blank"
              rel="noreferrer"
              className="twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
