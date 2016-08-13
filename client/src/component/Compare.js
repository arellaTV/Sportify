import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayersByName } from '../actions/index';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

class Compare extends Component {
  componentWillMount() {
    this.props.getPlayersByName({ playerOne: 'Aaron Rodgers', playerTwo: 'Cam' });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.getPlayersByName({ playerOne: event.target[0].value, playerTwo: 'Aaron' })
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className='center-content'>
        <h1>Compare Players</h1>
        <div className="search-container">
          <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="text" name="name" placeholder="SEARCH" />
            <input type="submit" />
          </form>
        </div>
        <ComparePlayerHeadshots />
        <ComparePlayerStats />
      </div>
		);
  }
}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps, { getPlayersByName })(Compare);
