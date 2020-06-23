const initialState = {
    todoIds: [],
    byIds: {
        
    }
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return action.payload
        case 'TOGGLE_TODOS':
            return action.payload
        case 'FETCH_ALL_TODO_SUCCESS':
            return action.payload
        default:
            return state

    }
}

export default todoReducer