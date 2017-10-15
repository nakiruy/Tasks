import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };

  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTask} className="task">
         <button className="button" id="add" type="add">Add Task</button>
        </form>
      </div>
    )
  }
}

export default Task