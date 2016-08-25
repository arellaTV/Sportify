const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_PLAYER_TWEETS':
      return action.payload;
    case 'GET_TOP_20_PLAYERS':
      return action.payload;
    default:
      return state;
  }
}
