import React from 'react';
import styles from './Styles.module.css';

class ShoeSizesDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeSizeDisplay: '',
      selectedSize: ''
    };
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }

  generateShoeSizesArray() {
    let color = this.props.currentShoeColor;
    let length = this.props.shoeSizesInventory.length;
    if (color !== '' && length !== 0) {
      if (this.props.shoeSizesInventory[color]) {
        let sizeArray = Object.keys(this.props.shoeSizesInventory[color])
          .map((size) => {
              return Number(size);
            })
          .sort((a, b) => {
              return a - b;
            });
        // //
        // let sizeArray = Object.keys(this.props.shoeSizesInventory[color])
        //   .map(Number)
        //   .sort();
        // //
        return sizeArray;
      } else {
        let sizeArray = Object.keys(this.props.shoeSizesInventory)
          .map((size) => {
              return Number(size);
            })
          .sort((a, b) => {
              return a - b;
            });
        // let sizeArray = Object.keys(this.props.shoeSizesInventory[color])
        //   .map(Number)
        //   .sort();
        return sizeArray;
      }
    }
    return [];
  }

  getCurrentInventoryList() {
    let color = this.props.currentShoeColor;
    let inventory = this.props.shoeSizesInventory;
    if (inventory[color]) {
      let inventoryList = inventory[color];
      return inventoryList;
    }
    return inventory;
  }


  handleSizeClick(e) {
    var size = e.target.title;
    if (!size.includes('Unavailable')) {
      this.setState({
        selectedSize: size
      });
    }
  }

  render() {
    return (
      <div className = {styles.shoeSizeContainer}>
        <div>
          <span className={styles.bold}>Size: </span>
          {this.state.selectedSize}
        </div>
        <ul className={styles.shoeSizeList}>
          {this.generateShoeSizesArray().map((size, index) => {
            return (
              <li
                key={index}
                title={this.getCurrentInventoryList()[size] === 0 ? `${size} Unavailable` : `${size}`}
                className={this.getCurrentInventoryList()[size] === 0 ? `${styles.shoeSizeSquare} ${styles.unavailable}` : `${styles.shoeSizeSquare} ${styles.available}`}
                onClick={this.handleSizeClick}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoeSizesDisplay;
