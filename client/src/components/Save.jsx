import React from 'react';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <span>
          <button onClick={this.saveTasks} className="button" id="save" type="save">Save</button>
        </span>
      </div>
    )
  }
}

export default Save