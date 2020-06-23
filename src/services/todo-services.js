import * as firebase from 'firebase/app'
import 'firebase/database'


export const addTodoService = async ({ title, description, completed }) => {
    var todoRef = firebase.database().ref('todos')
    var newRef = todoRef.push()
    newRef.set({ title, description, completed })

    const todos=await firebase.database().ref('todos').once('value').then(snapshot=>snapshot.val())
    return todos
}

export const fetchAllTodos=async ()=>{
    const todos=await firebase.database().ref('todos').once('value').then(snapshot=>snapshot.val())
    return todos
}

export const toggleTodoService=async id=>{
    var todo= await firebase.database().ref('todos/'+id).once('value').then(snapshot=>snapshot.val())
    await firebase.database().ref('todos/'+id).set({
        title:todo.title,
        description:todo.description,
        completed:!todo.completed
    })

    const todos=await firebase.database().ref('todos').once('value').then(snapshot=>snapshot.val())
    return todos
}