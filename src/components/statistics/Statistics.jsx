import React from 'react';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.statList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>positivePercentage: {positivePercentage}</li>
      </ul>
    </div>
  );
};
export default Statistics;
