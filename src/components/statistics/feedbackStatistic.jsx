
import PropTypes from 'prop-types';
import css from './statistics.module.css';

FeedbackStatistic.propTypes = {
  good : PropTypes.number,
  neutral : PropTypes.number,
  bad : PropTypes.number,
  total : PropTypes.number,
  positive : PropTypes.number,
}

export function FeedbackStatistic({good, neutral, bad, total, positive}) {
  console.log(total);
  // let total = good + neutral + bad;
  // console.log(total);
  return (
    <div>
      <ul className={css.feedbackStatistic}>
        <li className={css.feedbackStatisticGood}>
          <p><span>{good}</span> :good</p>
        </li>
        <li className={css.feedbackStatisticNeutral}>
          <p><span>{neutral}</span> :neutral</p>
        </li>
        <li className={css.feedbackStatisticBad}>
          <p><span>{bad}</span> :bad</p>
        </li>
      </ul>
      <ul className={css.feedbackStatistic}>
        <li>
          <p>TOTAL: <span>{total}</span></p>
        </li>
        <li>
          <p>POSITIVE  FEEDBACK: <span>{positive}</span>%</p>
        </li>
      </ul>
    </div>  
  )    
}
