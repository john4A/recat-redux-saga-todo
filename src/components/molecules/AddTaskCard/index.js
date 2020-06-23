import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import TextArea from '../../atoms/TextArea';
import './add-card.css'
import { connect } from 'react-redux';

const AddTaskCard = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div className="add-card-container">
            <div>
                <label>Title:</label>
                <Title content={title} isEditing={true} onChange={title => setTitle(title)} />
            </div>
            <label>Description:</label>
            <TextArea content={description} isEditing={true} onChange={desc => setDescription(desc)} />
            <div className="action-bar">
                <Button label="Save" onClick={() => {
                    props.save(title, description)
                    props.onSave()
                }} />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        save: (title, description) => dispatch({
            type: 'ADD_TODO_ASYNC',
            payload: {
                title,
                description
            }
        })
    }
}

export default connect(null, mapDispatchToProps)(AddTaskCard)