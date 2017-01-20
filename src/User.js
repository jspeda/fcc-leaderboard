import React, { Component } from 'react';

class User extends Component {
  render() {
    const { details } = this.props;
    return (
      <li className="user">
        <p>{details.username}</p>
      </li>
    )
  }

}





export default User
