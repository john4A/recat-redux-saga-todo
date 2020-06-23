import * as firebase from 'firebase/app'
import 'firebase/database'


export const addTodoService = async ({ title, description, completed }) => {
    console.log("Inside service")
    var todoRef = firebase.database().ref('/todos')
    var newRef = todoRef.push()
    newRef.set({ title, description, completed })

    const todos=await firebase.database().ref('todos').once('value').then(snapshot=>snapshot.val())
    return todos
}

export const fetchAllTodos=async ()=>{
    const todos=await firebase.database().ref('todos').once('value').then(snapshot=>snapshot.val())
    return todos
}