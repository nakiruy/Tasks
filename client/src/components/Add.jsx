import React from 'react';
import Task from './Task';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    this.props.task;
  }



  render() {
    return (
      <div>
        <span>
          <form>
            <button onClick={this.addTask} className="button" id="add" type="add">Add Task</button>
          </form>
        </span>
      </div>
    )
  }
}

export default Add