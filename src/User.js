import React, { Component } from 'react';

class User extends Component {
  render() {
    const { details, order } = this.props;

    return (
      <li className="user">
        <span>{parseFloat(order) + 1}</span>
        <img src={details.img} alt={details.username} />
        <span className="username"><a href={`https://freecodecamp.com/${details.username}`}>{details.username}</a></span>
        <span>points in last 30: <span className="number">{details.recent}</span></span>
        <span>points all-time: <span className="number">{details.alltime}</span></span>
      </li>
    )
  }

}





export default User
