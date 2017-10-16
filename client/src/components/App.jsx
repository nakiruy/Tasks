import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Task from './Task';
import Add from './Add';
import Save from './Save';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get('http://cfassignment.herokuapp.com/yurika/tasks')
      .then(res => {
        console.log('these are the tasks', res);
        this.setState({tasks: res.data});
        console.log('this is the state of tasks now', this.state.tasks)
      })
      .catch(err => {
        console.log('this is the error', err);
      })
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('http://cfassignment.herokuapp.com/yurika/tasks')
      .then(() => {
        this.getTasks();
      })
  }



  render() {
    return (
      <div>
        <nav className="navbar"></nav>
        <div className="container">
          <h1 className="title">Tasks</h1>
          <Save />
          <Add />
          <div className="task">
            <h3 className="task-title">TASK</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default App