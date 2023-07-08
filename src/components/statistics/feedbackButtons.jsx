// import PropTypes from 'prop-types';
import css from './statistics.module.css';

// FeedbackButtons.propTypes = {
//   handlePlusGood :, 
//   handlePlusNeutral :, 
//   handlePlusBad : 
// }

export function FeedbackButtons({onLeaveFeedback}) {
  
  return (
  <ul className={css.feedbackList}>
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={onLeaveFeedback} name="good">👍 Good</button>
    </li>
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={onLeaveFeedback} name="neutral">😐 Neutral</button>
    </li >
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={onLeaveFeedback} name="bad">🙅‍♂️ Bad</button>
    </li>
  </ul>
  )    
}