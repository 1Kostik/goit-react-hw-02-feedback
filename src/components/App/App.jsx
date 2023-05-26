import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification.jsx';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtonClick = key => {
    // const key = event.target.textContent.toLowerCase();
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, vote) => vote + acc, 0);
  };
  countPositiveFeedbackPercentage = (good, total) => {
    const countPositive = Math.round((good / total) * 100);
    return countPositive;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const countPercentagePositiveReviews = this.countPositiveFeedbackPercentage(
      good,
      total
    );
    return (
      <Container>
        <Section title="Please live feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPercentagePositiveReviews}
            />
          )}
        </Section>
      </Container>
    );
  }
}
