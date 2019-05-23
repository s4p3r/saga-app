import {takeEvery, delay, put} from 'redux-saga/effects';
import {INCREMENT, INCREMENTASYNC} from '../constants/counter';


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