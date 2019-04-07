import React from 'react';
import ShoeDisplay from './ShoeDisplay.jsx';
import ShoeDisplayThumbnails from './ShoeDisplayThumbnails.jsx';
import ShoeInfo from './ShoeInfo.jsx';
const mockData = require('../mock_data.js');


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      shoeList: [],
      shoeDisplayThumbnails: [],
      mainShoeDisplayImage: [],
      currentShoeInfo: [],
      currentShoeColor: '',
      shoeSizesInventory: []
    }
    this.handleShoeDisplayThumbnailHover = this.handleShoeDisplayThumbnailHover.bind(this);
    this.handleShoeInfoThumbnailActions = this.handleShoeInfoThumbnailActions.bind(this);
  }

  getShoeList() {
    fetch('/api/shoes')
    .then(response => response.json())
    .then(shoes => {
      this.setState({
        shoeList: shoes,
        shoeDisplayThumbnails: shoes[0],
        mainShoeDisplayImage: shoes[0].right,
        currentShoeColor: shoes[0].colorNumber
      })
    })
    .catch(error => console.error(error))
  }

  getShoeInfo() {
    fetch('/api/shoeInfo')
    .then(response => response.json())
    .then(shoeInfo => {
      this.setState({
        currentShoeInfo: shoeInfo[0]
      })
    })
    .catch(error => console.error(error))
  }

  getShoeSizesInventory() {
    fetch('/api/sizesInventory')
    .then(response => response.json())
    .then(inventory => {
      this.setState({
        shoeSizesInventory: inventory
      })
    })
    .catch(error => console.error(error))
  }

  handleShoeDisplayThumbnailHover(shoe) {
    this.setState({
      mainShoeDisplayImage: shoe
    })
  }

  handleShoeInfoThumbnailActions(index) {
    this.setState({
      shoeDisplayThumbnails: this.state.shoeList[index],
      mainShoeDisplayImage: this.state.shoeList[index].right,
      currentShoeColor: this.state.shoeList[index].colorNumber
    })
  }

  componentDidMount() {
    this.getShoeList()
    this.getShoeInfo()
    this.getShoeSizesInventory()
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
              onShoeDisplayThumbnailHover={this.handleShoeDisplayThumbnailHover}
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
            currentShoeColor = {this.state.currentShoeColor}
            shoeSizesInventory = {this.state.shoeSizesInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
