import { useState } from 'react';
import './TodoItem.css';

function TodoItem( { todo } ) {
    return (
        <div>
            <div>{ todo.name }</div>
        </div>
    )
}

export default TodoItem;