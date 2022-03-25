import React from 'react';
import './App.css';

function TextBox(props : any) {
    return (
        <div className="TextBox">
            <header className="TextBox-header">
                {props.label2}
                <input type={"text"} onChange={event => props.change(event.target.value)}/>
            </header>
        </div>
    );
}

export default TextBox;