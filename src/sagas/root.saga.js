import { all } from 'redux-saga/effects'
import { watchAddTodo } from "./addTodo.saga";
import { watchToggleTodo } from "./toggleTodo.saga";


export function* rootSaga() {
    yield all([
        watchAddTodo(),
        watchToggleTodo()
    ])
}