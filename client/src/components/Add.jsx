import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: []
    };

  }

  render() {
    return (
      <div>
        <span>
          <form>
            <button className="button" id="add" type="add">Add Task</button>
          </form>
        </span>
      </div>
    )
  }
}

export default Add