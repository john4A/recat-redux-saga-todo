import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import TextArea from '../../atoms/TextArea';
import './card.css'

const TaskCard = ({ title, description, isEditingValues }) => {
    const [isEditing, toggleEditting] = useState(isEditingValues)
    return (
        <div className="card-container">
            <div className="header">
                <div>
                    <Title content={title} isEditing={isEditing} />
                </div>
                <div className="action-bar">
                    <Button label="Toggle" />
                </div>
            </div>
            <TextArea content={description} isEditing={isEditing} />
        </div>
    )
}

export default TaskCard