import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpecificPlayers } from './actions';
import ComparePlayerHeadshots from './ComparePlayerHeadshots';
import ComparePlayerStats from './ComparePlayerStats';

class Compare extends Component {
  componentWillMount() {
    this.props.fetchSpecificPlayers({ playerNames: ['Aaron Rodgers', 'Cam Newton'] });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchSpecificPlayers({ playerNames: [event.target[0].value, event.target[1].value] });
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
  return { search: state.query };
}

export default connect(mapStateToProps, { fetchSpecificPlayers })(Compare);
