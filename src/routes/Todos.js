import { getTodos, postTodos } from "../api/Todo";
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
        postTodos(value).then(response => console.log(response.data));
        // const newTodo = {
        //     title: e.target.title.value,
        // };
    }

    const changeCreteValue = (e) => {
        setValue(e.target.value);
    }

    return (
        <section>
            <form onSubmit={handleRegisterTodo}>
                <input onChange={changeCreteValue} type="text" placeholder="입력하세요." />
                <button>Register</button>
            </form>
            <ul>
                {todos.map(todo => <TodoList key={todo.id} todoList={todo}/>)}
            </ul>
        </section>
    )
}
export default Todos;