import React from 'react';


const ShoeDisplayThumbnails = (props) => {

  const handleHoverOver = (e) => {
    props.onThumbnailHover(e.target.src);
  }

  return (
    <div className="shoe-display-thumbnails">
      <img
        onMouseOver = {handleHoverOver}
        className="thumbnail-images"
        src={props.shoeDisplayThumbnails.right}
        alt="CurrySix-right"
      />
      <img
        onMouseOver = {handleHoverOver}
        className="thumbnail-images"
        src={props.shoeDisplayThumbnails.left}
        alt="CurrySix-left"
      />
      <img
        onMouseOver = {handleHoverOver}
        className="thumbnail-images"
        src={props.shoeDisplayThumbnails.top}
        alt="CurrySix-top"
      />
      <img
        onMouseOver = {handleHoverOver}
        className="thumbnail-images"
        src={props.shoeDisplayThumbnails.bottom}
        alt="CurrySix-bottom"
      />
      <img
        onMouseOver = {handleHoverOver}
        className="thumbnail-images"
        src={props.shoeDisplayThumbnails.pair}
        alt="CurrySix-pair"
      />
    </div>
  );
}

export default ShoeDisplayThumbnails;