import { getTodos, postTodo, updateTodo, deleteTodo } from "../api/TodoApi";
import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import { CreateInput, ScrollArea, TodoForm, TodoSection } from "./TodoStyle";
import RegisterButton from "../components/todo/RegisterButton";

function Todos() {
    const [value, setValue] = useState([]);
    const [todos, setTodos] = useState([]);
    const registerInput = useRef(null);

    const access_token = localStorage.getItem('access_token');

    useEffect(() => {
        getTodos(access_token).then((response)=> {
            console.log(response.data);
            setTodos(response.data);
        })
    }, [access_token]);

    const handleRegisterTodo = (e) => {
        e.preventDefault();
        console.log(value);
        postTodo(access_token, value).then(response => {
            setTodos(prev => ([...prev, response.data]));
        }).then(()=> {
            registerInput.current.value = "";
            listBodyScroll();
        });
    }

    const listBodyScroll = () => {
        const listBody = document.querySelector('.todoFormWrap ul');
        listBody.scrollTop = listBody.scrollHeight;
    }

    const changeCreteValue = (e) => {
        setValue(e.target.value);
    }

    const handleUpdateTodo = (todoId, value, isCompleted) => {
        updateTodo(access_token, todoId, value, isCompleted).then(response => {
            setTodos((prev) => {
                const updatedTodos = [...prev];
                const listIndex = updatedTodos.findIndex(todo => todoId === todo.id);
                updatedTodos[listIndex] = response.data;
                console.log(updatedTodos);
                return updatedTodos;
            })
        })
    }

    const handleDeleteTodo = (todoId) => {
        deleteTodo(access_token, todoId).then(response => {
            console.log(response);
            setTodos((prev) => (prev.filter(({id})=> id !== todoId)));
        });
    }

    return (
        <>
        <Header />
        <div className="todoFormWrap">
            <TodoSection>
                <TodoForm onSubmit={handleRegisterTodo}>
                    <CreateInput onChange={changeCreteValue} ref={registerInput} type="text" placeholder="Write Your Todo List."/>
                    <RegisterButton/>
                </TodoForm>
                <ScrollArea>
                    <TodoList todos={todos} handleUpdateTodo={handleUpdateTodo} handleDeleteTodo={handleDeleteTodo}/>
                </ScrollArea>
            </TodoSection>
        </div>
        </>
    )
}

export default Todos;