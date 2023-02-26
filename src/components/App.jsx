import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './section/section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedbackData = e => {
    this.setState(prevState => {
      let newState = { ...prevState };
      for (const key in newState) {
        if (key === e.target.textContent) {
          newState[key] += 1;
        }
      }

      return newState;
    });
  };

  countTotalFeedback = e => {
    const { good, neutral, bad } = this.state;
    const totalFeedBack = good + neutral + bad;
    return totalFeedBack;
  };

  countPositiveFeedbackPercentage = e => {
    if (this.state.good === 0) {
      return 0;
    }
    const totalData = this.countTotalFeedback();

    return Math.round((this.state.good * 100) / totalData);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateFeedbackData}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
