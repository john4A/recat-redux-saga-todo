import React from 'react';
import TextArea from '../TextArea';

const Title = ({ content, isEditing, onChange }) => {
    return (
        <div>
            {renderTitle(content, isEditing, onChange)}
        </div>
    )
}

const renderTitle = (content, isEditing, onChange) => {
    if (isEditing)
        return <TextArea isEditing={isEditing} content={content} onChange={onChange}/>
    else return <h2>{content}</h2>
}

export default Title