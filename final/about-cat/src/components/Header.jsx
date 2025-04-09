import Navigation from './Navigation';
import '../styles/global.css';
import PropTypes from 'prop-types';

function Header({ setPage, className }) {
  return (
    <header className={`app-header ${className}`}>
      <div className="header-content">
        <h1 onClick={() => setPage('WelcomePage')}>
          About Cat Web
        </h1>
        <Navigation setPage={setPage} />
      </div>
    </header>
  );
}

// Prop-types validation
Header.propTypes = {
  setPage: PropTypes.func.isRequired,
  className: PropTypes.string, 
};

export default Header;
