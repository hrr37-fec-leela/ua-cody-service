import React from 'react';
import ShoeInfoThumbnails from './ShoeInfoThumbnails.jsx';
import ShoeSizesDisplay from './ShoeSizesDisplay.jsx';

const ShoeInfo = (props) => {
  return (
    <div className="shoe-info-container">
      <div className="shoe-info">
        <div className="shoe-Name">
          {props.currentShoeInfo.name}
        </div>
        <div>
          {props.currentShoeInfo.category}
        </div>
        <div className = "style-number">
          Style # {props.currentShoeInfo.productId}
        </div>
        <div className="price">
          ${props.currentShoeInfo.price}
        </div>
        <div>
          <span className="bold">Color: </span>
          {props.shoeDisplayThumbnails.color} - {props.shoeDisplayThumbnails.colorNumber}
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
        <div className="qty">
          <span className="bold">Qty: </span>
        </div>
          <select name="addtocart-quantity" id="addtocart-quantity">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <button className="addtobag-button">ADD TO BAG</button>
        </div>
        <div>
          <button className="other-checkout-buttons">
            <i className="fa fa-paypal" aria-hidden="true"></i> PayPal Checkout
          </button>
          <button className="other-checkout-buttons">
            <i className="fa fa-gift" aria-hidden="true"></i> SEND AS A GIFT
          </button>
        </div>
        <div>

        </div>
      </div>
      <div className="shoe-info-right-margin"></div>
    </div>
  )
}

export default ShoeInfo;