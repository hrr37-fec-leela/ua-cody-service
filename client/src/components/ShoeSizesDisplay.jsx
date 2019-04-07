import React from 'react';

class ShoeSizesDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoeSizeDisplay: '',
      selectedSize: ''
    }
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }

  generateShoeSizesArray() {
    if (this.props.currentShoeColor !== '' && this.props.shoeSizesInventory.length !== 0) {
      let sizeArray;
      for (let i = 0; i < this.props.shoeSizesInventory.length; i++) {
        if (this.props.shoeSizesInventory[i].colorNumber === this.props.currentShoeColor) {
          sizeArray = Object.keys(this.props.shoeSizesInventory[i].sizeInventory)
          .map((size) => {
            return Number(size);
          })
          .sort((a, b) => {
            return a - b;
          })
        }
      }
      console.log(sizeArray);
      return sizeArray;
    }
    return [];
  }

  getCurrentInventoryList() {
    let inventory;
    for (let i = 0; i < this.props.shoeSizesInventory.length; i++) {
      if (this.props.shoeSizesInventory[i].colorNumber === this.props.currentShoeColor) {
        inventory = this.props.shoeSizesInventory[i].sizeInventory
      }
    }
    return inventory;
  }


  handleSizeClick(e) {
    var size = e.target.title;
    if (!size.includes('Unavailable')) {
      this.setState({
        selectedSize: size
      })
    }
  }

  render() {
    return (
      <div className = "shoe-size-container">
        <div>
          <span className='bold'>Size: </span>
          {this.state.selectedSize}
        </div>
        <ul className="shoe-size-list">
          {this.generateShoeSizesArray().map((size, index) => {
            return (
              <li
                key={index}
                title={this.getCurrentInventoryList()[size] === 0 ? `${size} Unavailable` : `${size}`}
                className={this.getCurrentInventoryList()[size] === 0 ? 'shoe-size-square unavailable' : 'shoe-size-square available'}
                onClick={this.handleSizeClick}
              >
                {size}
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default ShoeSizesDisplay;
