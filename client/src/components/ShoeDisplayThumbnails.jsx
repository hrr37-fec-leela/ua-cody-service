import React from 'react';
import styles from './Styles.module.css';


const ShoeDisplayThumbnails = (props) => {

  const handleHoverOver = (e) => {
    props.onShoeDisplayThumbnailHover(e.target.src);
  };

  return (
    <div className={styles.shoeDisplayThumbnails}>
      <img
        onMouseOver = {handleHoverOver}
        className={styles.thumbnailImages}
        src={props.shoeDisplayThumbnails.right}
        alt="CurrySix-right"
      />
      <img
        onMouseOver = {handleHoverOver}
        className={styles.thumbnailImages}
        src={props.shoeDisplayThumbnails.left}
        alt="CurrySix-left"
      />
      <img
        onMouseOver = {handleHoverOver}
        className={styles.thumbnailImages}
        src={props.shoeDisplayThumbnails.top}
        alt="CurrySix-top"
      />
      <img
        onMouseOver = {handleHoverOver}
        className={styles.thumbnailImages}
        src={props.shoeDisplayThumbnails.bottom}
        alt="CurrySix-bottom"
      />
      <img
        onMouseOver = {handleHoverOver}
        className={styles.thumbnailImages}
        src={props.shoeDisplayThumbnails.pair}
        alt="CurrySix-pair"
      />
    </div>
  );
};

export default ShoeDisplayThumbnails;