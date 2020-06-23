import { call, put, takeEvery } from 'redux-saga/effects'
import {fetchAllTodos} from '../services/todo-services'


function* fetchTodos(action){

    const todos=yield call(fetchAllTodos)

    const ids=Object.keys(todos)
    
    var state={
        todoIds:ids,
        byIds:todos
    }
    yield put({type:'FETCH_ALL_TODO_SUCCESS',payload:state})
}

export function* watchFetchTodos(){
    yield takeEvery('FETCH_ALL_TODOS',fetchTodos)
}