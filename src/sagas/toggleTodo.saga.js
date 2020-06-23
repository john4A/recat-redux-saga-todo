import { takeLatest, select, put } from 'redux-saga/effects'

const getState = state => state

function* toggleTodo(action) {
    let state = yield select(getState)

    state = {
        ...state,
        byIds: {
            ...state.byIds,
            [action.payload.id]: {
                ...state.byIds[action.payload.id],
                completed: !state.byIds[action.payload.id].completed
            }
        }
    }

    yield put({type:'TOGGLE_TODO',payload:state})

}

export function* watchToggleTodo() {
    yield takeLatest('TOGGLE_TODO_ASYNC', toggleTodo)
}