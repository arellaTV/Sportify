import { FETCH_COMPARE } from '../actions/index';

const INITIAL_STATE = { playerOne: [], playerTwo: [] };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_COMPARE:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}
