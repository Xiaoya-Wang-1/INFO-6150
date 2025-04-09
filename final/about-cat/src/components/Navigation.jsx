import '../styles/global.css';
import '../styles/navigation.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

function Navigation({ setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (page) => {
    setPage(page);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navigation">
      <button
        className="menu-toggle"
        onClick={handleMenuToggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        &#9776; 
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <button onClick={() => handleNavLinkClick('welcome')} aria-label="Go to Welcome Page">
            Welcome
          </button>
        </li>
        <li>
          <button onClick={() => handleNavLinkClick('cathabits')} aria-label="Learn about Cat Habits">
            Cat Habits
          </button>
        </li>
        <li>
          <button onClick={() => handleNavLinkClick('catbreeds')} aria-label="Explore Cat Breeds">
            Cat Breeds
          </button>
        </li>
        <li>
          <button onClick={() => handleNavLinkClick('catnews')} aria-label="Read Interesting Cat News">
            Cat News
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Prop-types validation
Navigation.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Navigation;
