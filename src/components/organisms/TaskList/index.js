import React, { useState, useEffect } from 'react';
import TaskCard from '../../molecules/TaskCard';
import './list.css'
import { connect } from 'react-redux';
import AddTaskCard from '../../molecules/AddTaskCard';

const TaskList = (props) => {
    const [addTask,setAddTask]=useState(false)

    useEffect(()=>{
        props.fetchTodos()
    },[])
    return (
        <div className="list-container">
            {props.todoIds.map((id, index) => {
                const task = props.byIds[id]
                return (
                    <TaskCard title={task.title} description={task.description} key={index} isEditingValues={!task.title && !task.description} id={id} completed={task.completed} onToggle={(id)=>props.toggle(id)}/>
                )
            })}
            {addTask && <AddTaskCard onSave={()=>setAddTask(false)}/>}
            <div onClick={()=>setAddTask(true)}><u><span>+Add Task</span></u></div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        todoIds: state.todoIds,
        byIds: state.byIds
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchTodos:()=>dispatch({type:'FETCH_ALL_TODOS'}),
        toggle:id=>dispatch({type:'TOGGLE_TODO_ASYNC',payload:{id}})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList)

