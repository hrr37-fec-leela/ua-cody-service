import React from 'react';
import NavBar from './NavBar.jsx';
import ShoeDisplay from './ShoeDisplay.jsx';
import ShoeDisplayThumbnails from './ShoeDisplayThumbnails.jsx';
import ShoeInfo from './ShoeInfo.jsx';
import styles from './Styles.module.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeList: [],
      shoeDisplayThumbnails: [],
      mainShoeDisplayImage: [],
      currentShoeInfo: [],
      currentShoeColor: '',
      shoeSizesInventory: []
    };
    this.handleShoeDisplayThumbnailHover = this.handleShoeDisplayThumbnailHover.bind(this);
    this.handleShoeInfoThumbnailActions = this.handleShoeInfoThumbnailActions.bind(this);
  }

  getShoeList() {
    let id = window.location.pathname.slice(1);
    let origin = window.location.origin;
    fetch(`${origin}/api/shoes/${id}`)
      .then(response => response.json())
      .then(shoes => {
        this.setState({
          shoeList: shoes[0].shoeImages,
          shoeDisplayThumbnails: shoes[0].shoeImages[0].images,
          mainShoeDisplayImage: shoes[0].shoeImages[0].images.right,
          currentShoeColor: shoes[0].shoeImages[0].colorNumber,
          currentColorName: shoes[0].shoeImages[0].colorName
        });
      })
      .catch(error => console.error(error));
  }

  getShoeInfo() {
    let id = window.location.pathname.slice(1);
    let origin = window.location.origin;
    fetch(`${origin}/api/shoeInfo/${id}`)
      .then(response => response.json())
      .then(shoeInfo => {
        this.setState({
          currentShoeInfo: shoeInfo
        });
      })
      .catch(error => console.error(error));
  }

  getShoeSizesInventory() {
    let id = window.location.pathname.slice(1);
    let origin = window.location.origin;
    fetch(`${origin}/api/sizesInventory/${id}`)
      .then(response => response.json())
      .then(inventory => {
        this.setState({
          shoeSizesInventory: inventory[0].sizeInventory
        });
      })
      .catch(error => console.error(error));
  }

  handleShoeDisplayThumbnailHover(shoe) {
    this.setState({
      mainShoeDisplayImage: shoe
    });
  }

  handleShoeInfoThumbnailActions(index) {
    this.setState({
      shoeDisplayThumbnails: this.state.shoeList[index].images,
      mainShoeDisplayImage: this.state.shoeList[index].images.right,
      currentShoeColor: this.state.shoeList[index].colorNumber,
      currentColorName: this.state.shoeList[index].colorName,
    });
  }

  componentDidMount() {
    this.getShoeList();
    this.getShoeInfo();
    this.getShoeSizesInventory();
  }

  render () {
    if (this.state.currentShoeInfo.length === 0) {
      return (
        <NavBar />
      );
    }
    return (
      <div className={styles.mainContainer}>
        <NavBar />
        <div className={styles.shoeContainer}>
          <div className={styles.shoeDisplay}>
            <div className={styles.shoeDisplayLeftMargin}></div>
            <div className={styles.heart}>
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </div>
            <ShoeDisplayThumbnails
              onShoeDisplayThumbnailHover={this.handleShoeDisplayThumbnailHover}
              shoeDisplayThumbnails={this.state.shoeDisplayThumbnails}
            />
            <ShoeDisplay
              mainDisplay={this.state.mainShoeDisplayImage}
            />
            <div className={styles.shoeDisplayFullDesc}>
              {this.state.currentShoeInfo[0].fullDesc}
            </div>
          </div>
          <ShoeInfo
            shoeDisplayThumbnails = {this.state.shoeDisplayThumbnails}
            currentShoeInfo = {this.state.currentShoeInfo}
            shoeList = {this.state.shoeList}
            onShoeInfoThumbnailActions = {this.handleShoeInfoThumbnailActions}
            currentShoeColor = {this.state.currentShoeColor}
            currentColorName = {this.state.currentColorName}
            shoeSizesInventory = {this.state.shoeSizesInventory}
          />
        </div>
      </div>
    );
  }
}

export default App;
