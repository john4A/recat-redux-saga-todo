import { takeLatest, put, call, select } from 'redux-saga/effects'
import {toggleTodoService} from '../services/todo-services'

const getState=state=>state

function* toggleTodo(action) {
    var todos= yield call(toggleTodoService,action.payload.id)

    let state=yield select(getState)
    state={
        ...state,
        byIds:todos
    }

    yield put({type:'TOGGLE_TODOS',payload:state})

}

export function* watchToggleTodo() {
    yield takeLatest('TOGGLE_TODO_ASYNC', toggleTodo)
}