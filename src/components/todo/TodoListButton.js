import React from 'react';

const TodoListButton = ({ buttonType, onClick }) => {
    return (
        <>
        {buttonType === "X" ? (
            <button onClick={ onClick } style={{backgroundColor: "#0b308c", color: "#fff"}} >
                { buttonType }
            </button>
        ) : (
            <button onClick={ onClick }>
                { buttonType }
            </button>
        )}

        </>
    )
}

export default TodoListButton;