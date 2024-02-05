import React from 'react';
import css from './Section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.sectionTittle}>{title}</h2>
      {children}
    </section>
  );
};
export default Section;
