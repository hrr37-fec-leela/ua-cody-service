import React from 'react';
import ReactDOM from 'react-dom';

const fakeData = require('./mock_data.js');


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="main-container">
        <nav className="navbar">NavBar</nav>
        <div className="shoe-container">
          <div className="shoe-display">Shoe Display</div>
          <div className="shoe-info">Shoe Info</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));