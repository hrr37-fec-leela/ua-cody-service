import React from 'react';
import styles from './Styles.module.css';

class ShoeInfoThumbnails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedShoeIndex: 0,
    };
    this.handleThumbnailMouseEnter = this.handleThumbnailMouseEnter.bind(this);
    this.handleThumbnailMouseLeave = this.handleThumbnailMouseLeave.bind(this);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
  }

  handleThumbnailMouseEnter(e) {
    let index = e.target.alt.slice(0, 1);
    this.props.onShoeInfoThumbnailActions(index);
  }

  handleThumbnailMouseLeave() {
    this.props.onShoeInfoThumbnailActions(this.state.selectedShoeIndex);
  }

  handleThumbnailClick(e) {
    this.setState({
      selectedShoeIndex: Number(e.target.alt.slice(0, 1))
    });
  }

  getThumbnailClassName(index) {
    if (index === this.state.selectedShoeIndex) {
      return `${styles.shoeInfoThumbnail} ${styles.selected}`;
    }
    return `${styles.shoeInfoThumbnail}`;
  }

  render() {
    return (
      <div>
        {this.props.shoeList.map((shoe, index) => {
          return (
            <span key = {index}>
              <img
                className={this.getThumbnailClassName(index)}
                src={shoe.images.right}
                alt={`${index} - Shoe Thumbnail`}
                onMouseEnter={this.handleThumbnailMouseEnter}
                onMouseLeave={this.handleThumbnailMouseLeave}
                onClick={this.handleThumbnailClick}
              />
            </span>
          );
        })}
      </div>
    );
  }
}

export default ShoeInfoThumbnails;