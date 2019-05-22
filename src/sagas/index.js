import {takeEvery, put, delay, call} from 'redux-saga/effects';
import {INCREMENTASYNC, INCREMENT} from '../constants/counter';
import axios from 'axios';



// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms)); 

function* incrementAsync(){
   yield delay(2000);
  // yield call(delay, 2000);  //这中写法推荐
  yield put({type: INCREMENT})
  console.log('sss')
}

//监听
export function* watchIncrementAsync(){
  yield takeEvery(INCREMENTASYNC, incrementAsync)  //action 过来触发
  //takeLatest 只运行一次
}

export function* fetchUser(){
   const user = yield call(axios.get, 'http://jsonplaceholder.typicode.com/users')
   console.log(user)
}

export function* watchFetchUser(){
  yield takeEvery('FETCH_USER_REQUEST', fetchUser)
}