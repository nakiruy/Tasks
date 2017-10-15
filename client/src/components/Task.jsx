import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <div>
        <form className="task">
         <button className="button" id="add" type="add">Add Task</button>
        </form>
      </div>
    )
  }
}

export default Task