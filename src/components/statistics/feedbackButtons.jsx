// import PropTypes from 'prop-types';
import css from './statistics.module.css';

// FeedbackButtons.propTypes = {
//   handlePlusGood :, 
//   handlePlusNeutral :, 
//   handlePlusBad : 
// }

export function FeedbackButtons({handlePlusGood, handlePlusNeutral, handlePlusBad}) {
  
  return (
  <ul className={css.feedbackList}>
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={handlePlusGood} name="good">👍 Good</button>
    </li>
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={handlePlusNeutral}>😐 Neutral</button>
    </li >
    <li className={css.feedbackLi}>
      <button type='button' className={css.feedbackButton} onClick={handlePlusBad}>🙅‍♂️ Bad</button>
    </li>
  </ul>
  )    
}