import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>positivePercentage:{positivePercentage}</li>
      </ul>
    </div>
  );
};
export default Statistics;
