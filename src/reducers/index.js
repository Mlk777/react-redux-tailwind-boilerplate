//If more than 1 reducers
// import { combineReducers } from 'redux';

// export default combineReducers({
// });

import { SET_REDUX } from '../actions/types';

const initialState = {
  isReduxAlive: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_REDUX:
      return {
        ...state,
        isReduxAlive: true,
      };
    default:
      return state;
  }
}
