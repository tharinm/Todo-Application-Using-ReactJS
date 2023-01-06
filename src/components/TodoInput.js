import './TodoInput.css';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline'
import { v4 } from "uuid";
    
function TodoInput({ todos, setTodos }) {

    const [todo, setTodo] = useState("");
    
    const handleClick = () => {
      
        if (todo.length > 0) {
        
            const newTodo = {
                id: v4(),
                name: todo,
                isCompleted: false,
            };

            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            setTodo(" ");
            //   console.log(newTodos);
        }
        else {
            <script>
                alert("Todo Can not be a blank");
            </script>
        }
    };

    


    
    //console.log(todo);
    return(
        <div className='todo-input-wrapper'>
            <input type="Text" value={todo} onChange={(event) => {
               
                    setTodo(event.target.value);
               
            }} />
            
            <button onClick={handleClick}>
                <PlusIcon className='plus-icon' />
            </button>
        </div>
       
    )
    
}

export default TodoInput;