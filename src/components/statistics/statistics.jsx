import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import css from './statistics.module.css';
import {FeedbackStatistic} from './feedbackStatistic';
import {FeedbackButtons} from './feedbackButtons';


export class Statistics extends Component {
  // ============= Якщо нічого не прийшло в Props =============
  // static defaultProps = {
  //   good : 0,
  //   neutral : 0,
  //   bad : 0
  // } 

  state = {
    good : 0,
    neutral : 0,
    bad : 0
  }

  // static propTypes ={

  // }


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

    <div className={css.statistics}>
      <div className={css.feedbacks}>
        <h1>Please leave us your feedback</h1>
        
{/* ================= <FeedbackOptions options={} onLeaveFeedback={}> ===============   */}
      <FeedbackButtons 
        onLeaveFeedback = {this.onLeaveFeedback} 
        />
      </div>

      {((this.state.good === 0) && (this.state.neutral === 0) && (this.state.bad === 0)) && 
        <p>There is no feedback</p>
      }

 {/* ============= <Statistics good={} neutral={} bad={} total={} positivePercentage={}> =====================  */}
      {(((this.state.good !== 0) || (this.state.neutral !== 0) || (this.state.bad !== 0)) && 
        <FeedbackStatistic 
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
          total = {this.countTotalFeedback()}
          positive = {this.countPositiveFeedbackPercentage()}
        />
        )}
    </div> 
      )
  }
};




  