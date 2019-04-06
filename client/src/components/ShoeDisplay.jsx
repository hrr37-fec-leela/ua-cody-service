import React from 'react';

const ShoeDisplay = (props) => {
  return (
    <div className="shoe-display-main">
      <img
        className="main-shoe-image"
        src={props.mainDisplay}
        alt="CurrySix-main"
      />
      {/* <video
        className="main-shoe-image"
        src="https://s3-us-west-2.amazonaws.com/hrr37-fec-underarmour-images/CurrySix-405/CurrySix360-405.mp4"
        controls loop>
      </video> */}
    </div>
  )
}

export default ShoeDisplay;