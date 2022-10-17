import axios from './axios';

export const getTodos = async (access_token) => {
    return await axios('/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
        }
    });
}

export const postTodo = async (access_token, value) => {
    return await axios('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
        },
        data: {
            "todo": value
        }
    });
}

export const updateTodo = async (access_token, id, value, isCompleted) => {
    return await axios(`/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
        },
        data: {
            "todo": value,
            "isCompleted": isCompleted
        }
    });
}

export const deleteTodo = async (access_token, id) => {
    return await axios(`/todos/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + access_token,
        }
    });
}