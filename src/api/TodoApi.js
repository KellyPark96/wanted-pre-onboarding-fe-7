import axios from './axios';

const access_token = localStorage.getItem('access_token');

export const getTodos = async () => {
    const response = await axios('/todos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
        },
    });
    if (response.status !== 200) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return response;
}

export const postTodo = async (value) => {
    const response = await axios('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + access_token,
        },
        data: {
            "todo": value
        }
    });
    if (response.status !== 201) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return response;
}

export const updateTodo = async (id, value, isCompleted) => {
    const response = await axios(`/todos/${id}`, {
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
    if (response.status !== 200) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return response;
}

export const deleteTodo = async (id) => {
    const response = await axios(`/todos/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + access_token,
        }
    });
    if (response.status !== 204) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return true;
}