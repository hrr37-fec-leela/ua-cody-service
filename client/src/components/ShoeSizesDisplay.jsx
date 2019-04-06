import React from 'react';
const mockData = require('../mock_data.js');

class ShoeSizesDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoeInventory: mockData.shoeInventory405[0],
      selectedSize: '',
    }
    this.handleSizeClick = this.handleSizeClick.bind(this);
  }

  generateShoeSizesArray() {
    let shoeSizes = [];
    for (let i = 7; i < 14; i += 0.5) {
      shoeSizes.push(i);
    }
    for (let i = 14; i < 19; i++) {
      shoeSizes.push(i);
    }
    return shoeSizes;
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
                title={this.state.shoeInventory[size] === 0 ? `${size} Unavailable` : `${size}`}
                className={this.state.shoeInventory[size] === 0 ? 'shoe-size-square unavailable' : 'shoe-size-square available'}
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
