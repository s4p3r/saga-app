import {INCREMENT, INCREMENTASYNC} from '../constants/counter';

export const increment = () => ({
  type: INCREMENT,
})

export const incrementAsync = () =>({
  type: INCREMENTASYNC
})