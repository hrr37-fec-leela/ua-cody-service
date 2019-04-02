import React from 'react';
import ReactDOM from 'react-dom';
import ShoeDisplay from './components/ShoeDisplay.jsx';
import ShoeThumbnails from './components/ShoeThumbnails.jsx';
const mockData = require('./mock_data.js');


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
              currentShoe={this.state.currentShoe}t
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

ReactDOM.render(<App />, document.getElementById('root'));