import React from 'react';
import PropTypes from 'prop-types';

import css from '../styles.module.css';


export const Section = ({title, children}) => { 
  return (
    <section className={css.feedbacks}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title : PropTypes.string,
  children : PropTypes.node.isRequired
}
