import React, {useState} from 'react';
import {updateTodo, deleteTodo} from "../api/TodoApi";

const TodoList = (list) => {
    console.log(list.todoList.todo);

    const handleDelete = (id) => {
        deleteTodo(id).then(response => console.log(response));
    }

    return (
        <li key={list.todoList.id}>
            {list.todoList.todo}
            <div className="todoListButtonWrap">
                <button className="">{list.todoList.isCompleted ? 'Completed' : 'Uncompleted'}</button>
                <button className="">Edit</button>
                <button className="delete" onClick={() => handleDelete(list.todoList.id)}>X</button>
            </div>
        </li>
    )
}

export default TodoList;