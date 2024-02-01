import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul>
        {options.map(option => (
          <button type="button" id={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        ))}
      </ul>
    </div>
  );
};
export default Feedback;
