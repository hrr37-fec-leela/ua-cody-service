import React from 'react';
import ShoeDisplay from './ShoeDisplay.jsx';
import ShoeThumbnails from './ShoeThumbnails.jsx';
const mockData = require('../mock_data.js/index.js');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentShoe: mockData.currySix405[1],
      mainDisplay: mockData.currySix405[1].right
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
  }

  handleThumbnailHover(shoe) {
    this.setState({
      mainDisplay: shoe
    })
  }

  render () {
    return (
      <div className="main-container">
        <nav className="navbar">NavBar</nav>
        <div className="shoe-container">
          <div className="shoe-display">
            <div className="shoe-display-left-margin"></div>
            <ShoeThumbnails
              onThumbnailHover={this.handleThumbnailHover}
              currentShoe={this.state.currentShoe}
            />
            <ShoeDisplay
              mainDisplay={this.state.mainDisplay}
            />
            <div className="shoe-display-bottom">bottom</div>
          </div>
          <div className="shoe-info">Shoe Info</div>
        </div>
      </div>
    );
  }
}

export default App;
