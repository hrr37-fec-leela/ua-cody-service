import React from 'react';
import ShoeDisplay from './ShoeDisplay.jsx';
import ShoeDisplayThumbnails from './ShoeDisplayThumbnails.jsx';
import ShoeInfo from './ShoeInfo.jsx';
const mockData = require('../mock_data.js');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoeList: mockData.currySixList,
      shoeDisplayThumbnails: mockData.currySixList[0],
      mainShoeDisplayImage: mockData.currySixList[0].right,
      currentShoeInfo: mockData.shoeInfo[0]
    }
    this.handleThumbnailHover = this.handleThumbnailHover.bind(this);
    this.handleShoeInfoThumbnailActions = this.handleShoeInfoThumbnailActions.bind(this);
  }

  handleThumbnailHover(shoe) {
    this.setState({
      mainShoeDisplayImage: shoe
    })
  }

  handleShoeInfoThumbnailActions(index) {
    this.setState({
      shoeDisplayThumbnails: mockData.currySixList[index],
      mainShoeDisplayImage: mockData.currySixList[index].right
    })
  }

  render () {
    return (
      <div className="main-container">
        <nav className="navbar">NavBar</nav>
        <div className="shoe-container">
          <div className="shoe-display">
            <div className="shoe-display-left-margin"></div>
            <div className="heart">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div>
            <ShoeDisplayThumbnails
              onThumbnailHover={this.handleThumbnailHover}
              shoeDisplayThumbnails={this.state.shoeDisplayThumbnails}
            />
            <ShoeDisplay
              mainDisplay={this.state.mainShoeDisplayImage}
            />
            {/* below is just a placeholder for now */}
            <div className="shoe-display-bottom">bottom</div>
          </div>
          <ShoeInfo
            shoeDisplayThumbnails = {this.state.shoeDisplayThumbnails}
            currentShoeInfo = {this.state.currentShoeInfo}
            shoeList = {this.state.shoeList}
            onShoeInfoThumbnailActions = {this.handleShoeInfoThumbnailActions}
          />
        </div>
      </div>
    );
  }
}

export default App;
