import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users30: {},
      usersAllTime: {},
      month: true
    }
  }

  componentWillMount() {
    const topMonthPromise = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
    topMonthPromise
      .then(data => data.json())
      .then(data => this.setState({users30: data}))
      .catch(err => console.error(err));

    const allTimePromise = fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    allTimePromise
      .then(data => data.json())
      .then(data => this.setState({usersAllTime: data}))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>freeCodeCamp Leaderboard</h2>
        </div>
        <div className="container">
          <p className="App-intro">
            view all-time
          </p>
          <ul className="list-of-users">
            {
              Object
                .keys(this.state.users30)
                .map(key => <User key={key} order={key} details={this.state.users30[key]} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
