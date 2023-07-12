import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './styles.module.css';
import { Section } from './section/section';
import { Notification } from './notification/notification'
import { FeedbackStatistic } from './feedbackStatistic/feedbackStatistic';
import { FeedbackButtons } from './feedbackButtons/feedbackButtons';


export class App extends Component {
  state = {
    good : 0,
    neutral : 0,
    bad : 0
  }

  onLeaveFeedback = (e) => {
    let option = e.target.name;
    this.setState(prevState => ({
      [option] : prevState[option] +1
      }));
  }

  countTotalFeedback() {
    return (+this.state.good + +this.state.neutral + +this.state.bad);
  }

  countPositiveFeedbackPercentage() {
    let total = +this.state.good + +this.state.neutral + +this.state.bad;
    return Math.round((this.state.good/total)*100)
  }


  render() {
    return (
      <div className={css.wrapper}>
        <Section title="Please leave us your feedback">
          <FeedbackButtons
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="" >
          {this.state.good === 0 &&
            this.state.neutral === 0 &&
            this.state.bad === 0 && <Notification message="There is no feedback"/>}

          {(this.state.good !== 0 ||
            this.state.neutral !== 0 ||
            this.state.bad !== 0) && (
            <FeedbackStatistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
};

// App.propTypes = {
//   good: PropTypes.number,
//   neutral: PropTypes.number,
//   bad: PropTypes.number,
// };


// export const App = () => {
//   return (
//     <>
//     {/* ================= <Section title=""> ===============   */}
//      <Statistics/>
//     </>
//   );
// };
