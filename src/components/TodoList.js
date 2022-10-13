import React from 'react';

const TodoList = (list) => {
    console.log(list.todoList.todo);
    return (
        <li key={list.todoList.id}>{list.todoList.todo}</li>
    )
}

export default TodoList;