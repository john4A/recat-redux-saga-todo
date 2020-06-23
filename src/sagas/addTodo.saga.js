import {put,takeEvery} from 'redux-saga/effects'

function* addTodo(action){
    yield put({type:'ADD_TODO',payload:action.payload})
}

export function* watchAddTodo(){
    console.log("inside watcher")
    yield takeEvery('ADD_TODO_ASYNC',addTodo)
}