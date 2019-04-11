import React from 'react';
import styles from './Styles.module.css';

const ShoeDisplay = (props) => {
  return (
    <div className={styles.shoeDisplayMain}>
      <img
        className={styles.mainShoeImage}
        src={props.mainDisplay}
        alt="CurrySix-main"
      />
      {/* <video
        className="main-shoe-image"
        src="https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix360-405.mp4"
        controls loop>
      </video> */}
    </div>
  );
};

export default ShoeDisplay;