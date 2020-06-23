import { findAllByAltText } from "@testing-library/react";

import { all } from 'redux-saga/effects'
import { watchAddTodo } from "./addTodo.saga";
export function* rootSaga() {
    yield all([
        watchAddTodo()
    ])
}