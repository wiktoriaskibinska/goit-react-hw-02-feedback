import React from 'react';
import css from './Feedback.module.css';
const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.bttnsContainer}>
      {options.map(option => (
        <button
          type="button"
          id={option}
          onClick={onLeaveFeedback}
          className={css.feedbackBttn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
export default Feedback;
