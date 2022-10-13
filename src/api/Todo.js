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

export const postTodos = async (value) => {
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