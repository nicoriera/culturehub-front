import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="../../assets/images/logo-houseco.png" alt="logo" />
      </div>
      <div className="footer-content">
        <p>© 2023 HouseCo. Tous droits réservés.</p>
        <ul className="footer-links">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/articles/news">News</a>
          </li>
          <li>
            <a href="#">À propos</a>
          </li>
          <li>
            <a href="mailto:nrierapro@gmail.com">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
