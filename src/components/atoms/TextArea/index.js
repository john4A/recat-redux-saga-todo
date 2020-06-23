import React, { useState } from 'react';

const TextArea = ({ isEditing, content, onChange }) => {
    const [text,setText]=useState(content)
    return (
        <div>
            {renderTextArea(isEditing, text, setText, onChange)}
        </div>
    )
}

const renderTextArea = (isEditing, text, setText, onChange) => {
    if (isEditing)
        return <input type="text" value={text} onChange={e=>{
            onChange(e.target.value)
            setText(e.target.value)
        }} />
    else return <p>{text}</p>
}

export default TextArea