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
      <div className="task">
          <i className="fa fa-th" aria-hidden="true"></i>
          <h3 className="task-title">TASK</h3>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Task