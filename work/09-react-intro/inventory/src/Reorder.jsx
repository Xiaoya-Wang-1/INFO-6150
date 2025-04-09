import PropTypes from 'prop-types';

function Reorder({ onReorder }) {
    return (
      <button onClick={onReorder} className="reorder-button">
        Reorder
      </button>
    );
  }
Reorder.propTypes = {
  onReorder: PropTypes.func.isRequired,
};
export default Reorder;