import React, { useState } from "react";
import { EditInput, TodoButtons, TodoItems } from "./TodoStyle"
import TodoListButton from "../components/todo/TodoListButton";
import IsCompleteButton from "../components/todo/IsCompleteButton";

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
        <TodoItems key={todo.id}>
            { !toggleButton ? (
                <>
                    {todo.todo}
                </>
            ) : (
                <>
                    <EditInput type="text"
                               onChange={(e)=> setUpdateValue(e.target.value)}
                               value={updateValue} />
                </>
            )}

            <TodoButtons>
                { !toggleButton ? (
                    <>
                        <TodoListButton buttonType={"Edit"} onClick={handleEditButton} />
                    </>
                ) : (
                    <>
                        <TodoListButton buttonType={"Submit"} onClick={submitUpdateTodo} />
                        <TodoListButton buttonType={"Cancel"} onClick={handleEditButton} />
                        <IsCompleteButton isCompleted={isCompleted} onClick={handleIsCompleted} />
                    </>
                )}
                <TodoListButton buttonType={"X"} onClick={() => handleDeleteTodo(todo.id)} $delete />

            </TodoButtons>
        </TodoItems>
    )
}

export default TodoListInner;