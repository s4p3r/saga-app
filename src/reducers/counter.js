import {INCREMENT} from '../constants/counter';

const initialState = {
  count: 1
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case INCREMENT:
    state.count ++;
    return { ...state }

  default:
    return state
  }
}
