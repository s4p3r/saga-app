// import {takeEvery, put, delay, call, all} from 'redux-saga/effects';
// import {INCREMENTASYNC, INCREMENT} from '../constants/counter';
// import axios from 'axios';
import {all, fork} from 'redux-saga/effects';

import {watchIncrementAsync} from './counter';
// import {watchFetchUser, watchFetchTodos} from './users';
import * as userSagas from './users';

console.log(userSagas);


// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 

// function* incrementAsync(){
//    yield delay(2000);
//   // yield call(delay, 2000);  //这中写法推荐
//   yield put({type: INCREMENT})
//   console.log('sss')
// }

// //监听
// export function* watchIncrementAsync(){
//   yield takeEvery(INCREMENTASYNC, incrementAsync)  //action 过来触发
//   //takeLatest 只运行一次
// }

// export function* fetchUser(){
//     const user = yield fork(call(axios.get, 'http://jsonplaceholder.typicode.com/users'))
//   //  const [todos, user] = yield all([
//   //    call(axios.get, "http://jsonplaceholder.typicode.com/todos"),
//   //    call(axios.get, "http://jsonplaceholder.typicode.com/users")
//   //  ])
// }

// export function* watchFetchUser(){
//   yield takeEvery('FETCH_USER_REQUEST', fetchUser)
// }

// export default function* rootSaga() {
//   //中括号并发执行
//   yield all([
//     fork(watchIncrementAsync),
//     fork(watchFetchUser),
//     fork(watchFetchTodos)
//   ])
// }


// fork 并发，新进程(...导入所有的)
export default function* rootSaga(){
  yield all([
    ...Object.values(userSagas),
    watchIncrementAsync
  ].map(fork));
}