import React, { useState } from "react";

const TodoListInner = ({ todo, handleUpdateTodo, handleDeleteTodo }) => {
    const [toggleButton, setToggleButton] = useState(false);
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    const [updateValue, setUpdateValue] = useState(todo.todo);

    const handleToggleButton = () => {
        setToggleButton((prev) => !prev);
    };

    const handleIsCompleted = () => {
        setIsCompleted((prev) => !prev);
    };

    const handleEditButton = () => {
        handleToggleButton();

    }

    const submitUpdateTodo = () => {
        handleUpdateTodo(todo.id, updateValue, isCompleted);
        handleToggleButton();
    }

    return (
        <li key={todo.id}>
            { !toggleButton ? (
                <>
                    {todo.todo}
                </>
            ) : (
                <>
                    <input className="editInput"
                           type="text"
                           onChange={(e)=> setUpdateValue(e.target.value)}
                           value={updateValue} />
                </>
            )}

            <div className="todoListButtonWrap">
                { !toggleButton ? (
                    <>
                        <button onClick={handleEditButton}>Edit</button>
                    </>
                ) : (
                    <>
                        <button onClick={submitUpdateTodo}>Submit</button>
                        <button onClick={handleEditButton}>Cancel</button>
                        <button onClick={handleIsCompleted}>{!isCompleted ? 'Uncompleted' : 'Completed'}</button>
                    </>
                )}
                <button className="delete" onClick={() => handleDeleteTodo(todo.id)}>X</button>
            </div>
        </li>
    )
}

export default TodoListInner;