import React, { Component } from 'react';
import './App.css';
import User from './User';

class App extends Component {
  constructor() {
    super();
    this.toggleMonth = this.toggleMonth.bind(this);
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

  toggleMonth() {
    this.setState({month: !this.state.month});
  }

  render() {

    let choice = this.state.month ? this.state.users30 : this.state.usersAllTime;
    
    return (
      <div className="App">
        <div className="App-header">
          <h2>freeCodeCamp Leaderboard</h2>
        </div>
        <button onClick={this.toggleMonth}><p className="App-intro">
          {this.state.month ? 'view all-time' : 'view last 30 days'}
        </p>
        </button>
        <div className="container">
          <ul className="list-of-users">
            {
              Object
                .keys(choice)
                .map(key => <User key={key} order={key} details={choice[key]} />)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
