
import PropTypes from 'prop-types';
import css from './statistics.module.css';

FeedbackStatistic.propTypes = {
  good : PropTypes.number,
  neutral : PropTypes.number,
  bad : PropTypes.number,
}

export function FeedbackStatistic({good, neutral, bad}) {
  return (
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
  )    
}
