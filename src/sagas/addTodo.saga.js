import {put,takeEvery, select} from 'redux-saga/effects'

const getState=state=>state

function* addTodo(action){
    let state=yield select(getState)

    let id=state.todoIds[state.todoIds.length-1]+1
    state={
        ...state,
        todoIds: [...state.todoIds, id],
        byIds: {
            ...state.byIds,
            [id]: {
                title: action.payload.title,
                description:action.payload.description,
                completed: false
            }
        }
    }

    console.log(state)

    yield put({type:'ADD_TODO',payload:state})
}

export function* watchAddTodo(){
    console.log("inside watcher")
    yield takeEvery('ADD_TODO_ASYNC',addTodo)
}