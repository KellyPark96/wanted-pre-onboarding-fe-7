import React from 'react';
import TodoListInner from "./TodoListInner";

const TodoList = ({todos, handleUpdateTodo, handleDeleteTodo}) => {
    return (
        <>
            {todos.map((todo)=>(
            <TodoListInner
                key={todo.id}
                todo={todo}
                handleUpdateTodo={handleUpdateTodo}
                handleDeleteTodo={handleDeleteTodo} />
            ))}
        </>
    )
}

export default TodoList;