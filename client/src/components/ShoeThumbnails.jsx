import React from 'react';

class ShoeThumbnails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      hover: ''
    }
    this.handleHoverOver = this.handleHoverOver.bind(this);
  }

  handleHoverOver(e) {
    this.props.onThumbnailHover(e.target.src);
  }

  render() {
    return (
      <div className="shoe-display-thumbnails">
        <img
          onMouseOver = {this.handleHoverOver}
          className="thumbnail-images"
          src={this.props.currentShoe.right}
          alt="CurrySix-right"
        />
        <img
          onMouseOver = {this.handleHoverOver}
          className="thumbnail-images"
          src={this.props.currentShoe.left}
          alt="CurrySix-left"
        />
        <img
          onMouseOver = {this.handleHoverOver}
          className="thumbnail-images"
          src={this.props.currentShoe.top}
          alt="CurrySix-top"
        />
        <img
          onMouseOver = {this.handleHoverOver}
          className="thumbnail-images"
          src={this.props.currentShoe.bottom}
          alt="CurrySix-bottom"
        />
        <img
          onMouseOver = {this.handleHoverOver}
          className="thumbnail-images"
          src={this.props.currentShoe.pair}
          alt="CurrySix-pair"
        />
      </div>
    );
  }
}

export default ShoeThumbnails;