import './TodoInput.css';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'
import { v4 } from "uuid";
    
function TodoInput({ todos, setTodos }) {

    const [todo, setTodo] = useState("");
    
    const handleClick = () => {
      
        const newTodo = {
            id: v4(),
            name: todo,
            isCompleted: false,
        };

        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo(" ");
        //   console.log(newTodos);
    };

    


    
    //console.log(todo);
    return(
        <div>
            <input type="Text" value={todo} onChange={(event) => {
               
                    setTodo(event.target.value);
               
            }} />
            
            <button onClick={handleClick}>
                <PlusIcon style={{ width: "20px",height:"20px"}} />
            </button>
        </div>
       
    )
    
}

export default TodoInput;