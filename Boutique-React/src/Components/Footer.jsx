import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="footer_brand">
          <h2>My Boutique</h2>
          <p>Des produits de qualité, sélectionnés avec soin pour vous.</p>
        </div>

        <div className="footer_links">
          <h4>Liens rapides</h4>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/products">Produits</a>
            </li>
              <li>
              <Link to="/about">About</Link>
          </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer_contact">
          <h4>Contact</h4>
          <p>Email: maBotique@gmail.com</p>
          <p>Tél: +212 6 75 45 03 32</p>
          <p>Adresse: Beni Mellal, Maroc</p>
        </div>

        <div className="footer_social">
          <h4>Suivez-nous</h4>
          <div className="social_icons">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>
          &copy; {new Date().getFullYear()} Ma Boutique. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
