import axios from './axios';

export const postSignUp = async (email, password) => {
    const response = await axios('/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            "email": email,
            "password": password
        }
    });
    if (response.status !== 201) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return response;
}

export const postSignIn = async (email, password) => {
    const response = await axios('/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            "email": email,
            "password": password
        }
    });
    if (response.status !== 200) {
        console.log(`${response.status} 에러가 발생했습니다`);
    }
    return response;
}