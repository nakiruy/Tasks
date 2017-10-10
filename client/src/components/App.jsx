import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
  
  }

  render() {
    return (
      <div>
        Tasks
      </div>
    )
  }
}

export default App