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
        <form action='http://cfassignment.herokuapp.com/yurika/tasks' method='post'>
          <button className="button" id="save" type="save">Save</button>
        </form>
      </div>
    )
  }
}

export default Save