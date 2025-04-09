import '../styles/global.css';
import '../styles/card.css';
import PropTypes from 'prop-types';

function Card({ imageSrc, title, link, appearance, personality, habits }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={`Image of ${title}`} />
      <div className="card-content">
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>
          <strong>Appearance:</strong> {appearance}
        </p>
        <p>
          <strong>Personality:</strong> {personality}
        </p>
        <p>
          <strong>Habits:</strong> {habits}
        </p>
      </div>
    </div>
  );
}

// Define propTypes for the Card component
Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  appearance: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  habits: PropTypes.string.isRequired,
};

export default Card;
