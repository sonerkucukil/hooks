import React, {useState} from 'react';
import TodoList from './TodoList';


const AddNewTodo = ({addTodo}) => {
    const [todo,setTodo] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    };
   
    return(
        <form onSubmit={onFormSubmit}>
            <label htmlFor= "todo"> </label>
            <input type= "text"id='todo' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
            <input type="submit"></input>
        </form>
    );
}

export default AddNewTodo;