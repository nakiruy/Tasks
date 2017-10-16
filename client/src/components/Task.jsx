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
        <li>Hey</li>
      </div>
    )
  }
}

export default Task