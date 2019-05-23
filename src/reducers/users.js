const initialState = {
  isFetch: false,
  error: null,
  user: null
}

export default (state = initialState, action={}) => {
  switch (action.type) {


  case 'FETCH_USER_REQUESTS':
    return {
      isFetch: true,
      error:null,
      user: {}
    }
  case 'FETCH_USER_SUCCESSED':
     return {
       isFetching: false,
       error: null,
       user: action.user
     }
  case 'FETCH_USER_FAILURE':
  return {
    isFetch: false,
    error: action.error,
    user: null
  }     
  case 'typeName':
    return { ...action }

  default:
    return state
  }
}
