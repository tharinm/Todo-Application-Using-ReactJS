import { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList() {

    const [todos, setTodos] = useState([]);

    return (
        <div className='todo-list-container'>
            <h1 style={{color:'white'}}>My Todos</h1>
            
            <TodoInput todos={todos} setTodos={ setTodos } />
            <div>
                {todos.map((item) => {
                    return (
                      <TodoItem
                        key={item.id}
                        todo={item}
                        todos={todos}
                        setTodos={setTodos}
                      />
                    );
                })}
            </div>
        </div>
    )
}

export default TodoList;