import React, { useState } from 'react';
import TaskCard from '../../molecules/TaskCard';
import './list.css'
import { connect } from 'react-redux';
import AddTaskCard from '../../molecules/AddTaskCard';

const TaskList = (props) => {
    const [addTask,setAddTask]=useState(false)
    return (
        <div className="list-container">
            {props.todoIds.map((id, index) => {
                const task = props.byIds[id]
                return (
                    <TaskCard title={task.title} description={task.description} key={index} isEditingValues={!task.title && !task.description} />
                )
            })}
            {addTask && <AddTaskCard onSave={()=>setAddTask(false)}/>}
            <div onClick={()=>setAddTask(true)}><u><span>+Add Task</span></u></div>
        </div>
    )
}



const matchStateToProps = state => {
    return {
        todoIds: state.todoIds,
        byIds: state.byIds
    }
}

export default connect(matchStateToProps)(TaskList)

