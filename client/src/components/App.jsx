import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Task from './Task';
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
        <div className="container">
            <div className="row mt-1 mb-4">
              <div className="col">
                <h1 className="display-1">Tasks</h1>
              </div>
            </div>
          <div className="row">
            <Task props={this.state.tasks} />
            <Save />
          </div>
        </div>
    )
  }
}

export default App