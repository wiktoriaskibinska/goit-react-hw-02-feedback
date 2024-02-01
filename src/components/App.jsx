import React, { Component } from 'react';
import Feedback from './feedback/Feedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  /*state = {
  };*/
  handleClick = evt => {
    /*console.log(evt);
    console.log(option);*/
    const option = evt.target.id;
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    };
    const totalFeedback = countTotalFeedback();
    const countPositivePercentage = () => {
      const { good } = this.state;
      const total = countTotalFeedback();
      return total > 0 ? Math.round((good / total) * 100) : 0;
    };
    const positivePercentage = countPositivePercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Leave Feedback:)!">
          <Feedback
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}
