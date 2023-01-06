import { useState } from "react";
import "./TodoItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function TodoItem({ todo, index, todos, setTodos }) {
  const [isEdit, setIsEdit] = useState(false);
  const [ediTodoName, setEditTodoName] = useState("");

  const handleDelete = () => {
    const newTodos = todos.filter((item) => {
      if (todo.id === item.id) {
        return false;
      } else {
        return true;
      }
    });
    setTodos(newTodos);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
    setEditTodoName(todo.name);
  };

  const handleSubmit = (e) => {
    //console.log(e);
    if (e.keyCode === 13) {
      const newTodos = todos.map((item) => {
        if (todo.id === item.id) {
          return {
            ...item,
            name: ediTodoName,
          };
        } else {
          return item;
        }
      });
      setTodos(newTodos);
      setIsEdit(false);
    }
  };

  const handleComplete = () => {
    const newTodos = todos.map((item) => {
      if (todo.id === item.id) {
        return {
          isCompleted: !item.isCompleted,
        };
      } else {
        return item;
      }
    });
      setTodos(newTodos);
  };

  return (
    <div className="todo-item-wrapper">
      <div className="todo-item-text">
        <div>{index}</div>
        {isEdit ? (
          <input
            type="text"
            value={ediTodoName}
            onChange={(e) => {
              setEditTodoName(e.target.value);
            }}
            onKeyDown={handleSubmit}
          />
        ) : (
          <div
            onClick={handleComplete}
            style={{
              textDecorationLine: todo.isCompleted ? "line-through" : "none",
              textDecorationColor: "rgb(255, 90, 255)",
            }}
          >
            {todo.name}
          </div>
        )}
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
