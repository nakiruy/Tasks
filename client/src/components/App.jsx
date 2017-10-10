import React from 'react';
import axios from 'axios';

import Save from './Save';
import New from './New';

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

  handleSubmit(e) {
    e.preventDefault();


  }

  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <button type="button">Save</button>
        <New />
        <li>{this.state.tasks.tasks}</li>
      </div>
    )
  }
}

export default App