import PropTypes from 'prop-types';
import css from '../styles.module.css';


export function FeedbackButtons({ options, onLeaveFeedback }) {
  let buttonsTexts = ['👍 Good', '😐 Neutral', '🙅‍♂️ Bad'];
  
  
  return (
    <ul className={css.feedbackList}>
      {options.map((option) => {
        let i = options.indexOf(option);
        return (
          <li>
            <button
              type="button"
              className={css.feedbackButton}
              onClick={onLeaveFeedback}
              name={option}
            >
              {buttonsTexts[i]}
            </button>
          </li>)
        })
      }
    </ul>
  )
}

FeedbackButtons.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};