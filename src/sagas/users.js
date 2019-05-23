import {takeEvery,  call, put} from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser(){
  console.log(444)
  try{
  const user = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
//  const [todos, user] = yield all([
//    call(axios.get, "http://jsonplaceholder.typicode.com/todos"),
//    call(axios.get, "http://jsonplaceholder.typicode.com/users")
//  ])

    // put 是发送一个reducers
    yield put({type: "FETCH_USER_SUCCESSED", user:user})
  } catch(e) {
    yield put({type: "FETCH_USER_FAILURE", error: e.message})
  }
    // console.log(user)
}


function* fetchTodos() {
  const todos = yield call(axios.get, "http://jsonplaceholder.typicode.com/todos");
  console.log(todos);
}



export function* watchFetchUser(){
  // takeEVERY 点一次发送一次
  // 第一个参数是将监听所有发起到 store 的 action
yield takeEvery('FETCH_USER_REQUESTS', fetchUser)
}

export function* watchFetchTodos(){
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos)
}

//或者当前进行封装

// export const userSaga = [
//   watchFetchTodos(),
//   watchFetchUser()
// ]



// yield all([
//   ...counterSagas
// ])