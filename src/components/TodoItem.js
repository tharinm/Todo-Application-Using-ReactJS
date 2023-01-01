import { useState } from 'react';
import './TodoItem.css';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';



function TodoItem({ todo , index ,todos ,setTodos }) {
    
    const [isEdit, setIsEdit ] = useState(false);

  const handleDelete = () => {
    const newTodos = todos.filter((item) => {
      if (todo.id === item.id) {
        return false;
      }
      else {
        return true;
      }
    });
    setTodos(newTodos);
  };

    const handleEdit = () => {
      setIsEdit(!isEdit)
    };

    return (
      <div className="todo-item-wrapper">
        <div className="todo-item-text">
          <div>{index}.</div>
          {isEdit ? (<input type="text" /> ): <div>{todo.name}</div>}
        </div>
        <div className="todo-item-buttons">
          {/* <div>{index}</div> */}

          <button className="pencil-button" onClick={handleEdit}>
            <PencilIcon />
          </button>
          <button className="trash-button" onClick={handleDelete}>
            <TrashIcon />
          </button>
        </div>
      </div>
    );
}

export default TodoItem;