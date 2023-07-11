
import PropTypes from 'prop-types';
import css from '../styles.module.css';

export function FeedbackStatistic({good, neutral, bad, total, positive}) {
  // let total = good + neutral + bad;
  // console.log(total);
  return (
    <div>
      <ul className={css.feedbackStatistic}>
        <li>
          <p><span>{good}</span> :good</p>
        </li>
        <li>
          <p><span>{neutral}</span> :neutral</p>
        </li>
        <li>
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

FeedbackStatistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
