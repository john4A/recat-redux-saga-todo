const initialState = {
    todoIds: [1,2],
    byIds: {
        1: {
            title: "Task 1",
            description: "Description 1",
            completed: true
        },
        2: {
            title: "Task 2",
            description: "Description 2",
            completed: false
        },
    }
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let id=state.todoIds[state.todoIds.length-1]+1
            return {
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
        case 'TOGGLE_TODOS':
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [action.payload.id]: {
                        ...state.byIds[action.payload.id],
                        completed: !state.byIds[action.payload.id].completed
                    }
                }
            }
        default:
            return state

    }
}

export default todoReducer