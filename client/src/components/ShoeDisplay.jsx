import React from 'react';

const ShoeDisplay = (props) => {
  return (
    <div className="shoe-display-main">
      <img
        className="main-shoe-image"
        src={props.mainDisplay}
        alt="CurrySix-right"
      />
    </div>
  )
}

export default ShoeDisplay;