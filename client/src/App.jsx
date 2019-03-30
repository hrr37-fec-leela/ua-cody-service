import React from 'react';
import ReactDOM from 'react-dom';

const fakeData = require('./mock_data.js');


class App extends React.Component {
  constructor(props) {
    super(props)

  }

  render () {
    return (
      <div>Hello React</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));