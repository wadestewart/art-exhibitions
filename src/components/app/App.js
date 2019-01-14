import React, { Component } from 'react';

class App extends Component {

  componentDidMount = () => {
    fetch('')
  }

  render() {
    return (
      <div>
        <h1>Hello Suckas!</h1>
      </div>
    );
  }
}

export default App;
