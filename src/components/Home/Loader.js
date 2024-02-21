import React from 'react';
import classes from './Loader.module.css' // Import the CSS file for styling

const Loader = () => {
  return (
    <div className={classes['loader-container']}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
