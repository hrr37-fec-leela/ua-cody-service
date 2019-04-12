import React from 'react';
import ShoeInfoThumbnails from './ShoeInfoThumbnails.jsx';
import ShoeSizesDisplay from './ShoeSizesDisplay.jsx';
import styles from './Styles.module.css';

const ShoeInfo = (props) => {
  if (!props.currentShoeInfo[0] && !props.shoeList[0]) {
    return (
      <div></div>
    )
  }
  return (
    <div className={styles.shoeInfoContainer}>
      <div className={styles.shoeInfo}>
        <div className={styles.shoeName}>
          {props.currentShoeInfo[0].name}
        </div>
        <div>
          {props.currentShoeInfo[0].category }
        </div>
        <div className = {styles.styleNumber}>
          Style # {props.currentShoeInfo[0].productId}
        </div>
        <div className={styles.price}>
          ${props.currentShoeInfo[0].price}
        </div>
        <div>
          <span className={styles.bold}>Color: </span>
          {props.currentColorName} - {props.currentShoeColor}
        </div>
        <ShoeInfoThumbnails
          shoeList = {props.shoeList}
          onShoeInfoThumbnailActions = {props.onShoeInfoThumbnailActions}
        />
        <ShoeSizesDisplay
          currentShoeColor = {props.currentShoeColor}
          shoeSizesInventory = {props.shoeSizesInventory}
        />
        <div>
          <div className={styles.qty}>
            <span className={styles.bold}>Qty: </span>
          </div>
          <select name={styles.addtocartQuantity} className={styles.addtocartQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <button className={styles.addtobagButton}>ADD TO BAG</button>
        </div>
        <div>
          <button className={styles.otherCheckoutButtons}>
            <i className="fa fa-paypal" aria-hidden="true"></i> PayPal Checkout
          </button>
          <button className={styles.otherCheckoutButtons}>
            <i className="fa fa-gift" aria-hidden="true"></i> SEND AS A GIFT
          </button>
        </div>
        <div>

        </div>
      </div>
      <div className={styles.shoeInfoRightMargin}></div>
    </div>
  );
};

export default ShoeInfo;