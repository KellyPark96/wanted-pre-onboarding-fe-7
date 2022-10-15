import { getTodos, postTodo, updateTodo, deleteTodo } from "../api/TodoApi";
import React, {useEffect, useRef, useState} from "react";
import TodoList from "../components/TodoList";
const getTodos_URL = '/auth/todos';

function Todos(){
    const [value, setValue] = useState([]);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(todos => setTodos(todos.data))
    }, []);

    console.log(todos);

    const handleRegisterTodo = (e) => {
        e.preventDefault();
        console.log(value);
        postTodo(value).then(response => console.log(response.data));
    }

    const changeCreteValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="todoFormWrap">
            <form className="todoForm" onSubmit={handleRegisterTodo}>
                <input onChange={changeCreteValue} type="text" placeholder="Write Your Todo List." />
                <button className="registerButton">Register</button>
            </form>
            <ul>
                {todos.map(todo => <TodoList key={todo.id} todoList={todo}/>)}
            </ul>
        </div>
    )
}
export default Todos;