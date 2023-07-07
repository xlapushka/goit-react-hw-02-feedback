import React from 'react';
// import PropTypes from 'prop-types';
import css from './statistics.module.css';
import {FeedbackStatistic} from './feedbackStatistic';
import {FeedbackButtons} from './feedbackButtons'

// Statistics.propTypes = {
//   friends : PropTypes.arrayOf(PropTypes.shape({
//     id : PropTypes.string.isRequired
//   })).isRequired
// }

export class Statistics extends React.Component {

  // ============= Якщо нічого не прийшло в Props =============
  static defaultProps = {
    good : 0,
    neutral : 0,
    bad : 0
  }

  

  // static propTypes ={

  // }

  state = {
    good : 0,
    neutral : 0,
    bad : 0
  }

  handlePlusGood = (e) => {

    this.setState(prevState => ({
      good : prevState.good +1
      }));
  }

  handlePlusNeutral = () => {
    this.setState(prevState => ({
      neutral : prevState.neutral +1
      }));
  }

  handlePlusBad = () => {
    this.setState(prevState => ({
      bad : prevState.bad +1
      }));
  }


  render() {
    return (
    <div className={css.statistics}>
      <div className={css.feedbacks}>
        <h1>Please leave us your feedback</h1>
  
      <FeedbackButtons 
        handlePlusGood = {this.handlePlusGood} 
        handlePlusNeutral = {this.handlePlusNeutral} 
        handlePlusBad = {this.handlePlusBad}
        />
      </div>
  
      {(((this.state.good !== 0) || (this.state.neutral !== 0) || (this.state.bad !== 0)) && 
        <FeedbackStatistic 
          good = {this.state.good}
          neutral = {this.state.neutral}
          bad = {this.state.bad}
        />)}
      
    </div> 
      )
  }
};




  