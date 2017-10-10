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
    axios.get('http://cfassignment.herokuapp.com/yurika/tasks')
      .then((res) => {
        console.log('these are the tasks', res);
        this.setState({tasks: res.data});
        console.log('this is the state of tasks now', this.state.tasks)
      })
      .catch((err) => {
        console.log('this is the error', err);
      })
  }

  render() {
    return (
      <div>
        Tasks
        <li>{this.state.tasks.tasks}</li>
      </div>
    )
  }
}

export default App