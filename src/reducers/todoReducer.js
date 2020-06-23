const initialState = {
    todoIds: [1, 2],
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
            return action.payload
        case 'TOGGLE_TODOS':
            return action.payload
        default:
            return state

    }
}

export default todoReducer