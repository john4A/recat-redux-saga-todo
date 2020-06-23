import { put, takeEvery, select, call } from 'redux-saga/effects'
import { addTodoService } from '../services/todo-services'

const getState = state => state

function* addTodo(action) {
    let todos = yield call(addTodoService, { ...action.payload, completed: false })

    let state = yield select(getState)


    let ids = Object.keys(todos)
    state = {
        ...state,
        todoIds: ids,
        byIds: todos
    }

    yield put({ type: 'ADD_TODO', payload: state })
}

export function* watchAddTodo() {
    console.log("inside watcher")
    yield takeEvery('ADD_TODO_ASYNC', addTodo)
}