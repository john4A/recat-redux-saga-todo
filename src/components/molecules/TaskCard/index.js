import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import TextArea from '../../atoms/TextArea';
import './card.css'

const TaskCard = (props) => {
    const { id, title, description, isEditingValues, completed } = props

    const [isEditing, toggleEditting] = useState(isEditingValues)
    return (
        <div className="card-container">
            <div className="header">
                <div>
                    <input type="checkbox" checked={completed} readOnly={true} className='check-box'/>

                    <Title content={title} isEditing={isEditing} />
                </div>
                <div className="action-bar">
                    <Button label="Toggle" onClick={() => props.onToggle(id)} />
                </div>
            </div>
            <TextArea content={description} isEditing={isEditing} />
        </div>
    )
}



export default TaskCard