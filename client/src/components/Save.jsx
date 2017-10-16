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
          <form action='http://cfassignment.herokuapp.com/yurika/tasks' method='post'>
            <button className="button" id="save" type="save">Save</button>
          </form>
        </span>
      </div>
    )
  }
}

export default Save