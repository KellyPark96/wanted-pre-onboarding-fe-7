import axios from 'axios';

export default axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop'
});

// const baseURL = 'https://pre-onboarding-selection-task.shop';
//
// export async function postSignUp(data) {
//     const { email, password } = data;
//     const res = await fetch(`${baseURL}/auth/signup`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         }),
//     });
//     if (!res.ok) {
//         console.log(`${res.status} 에러가 발생했습니다`);
//     }
//     return await res.json();
// }
//
// export async function postSignIn(data) {
//     const { email, password } = data;
//     // const response = await axios.post(LOGIN_URL,
//     //     JSON.stringify({ user, pwd }),
//     //     {
//     //         headers: { 'Content-Type': 'application/json' },
//     //         withCredentials: true
//     //     }
//     // );
//     const response = await axios(`${baseURL}/auth/signin`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             withCredentials: true
//         },
//         body: JSON.stringify({email, password}),
//     });
//     console.log(response);
//     if (!response.ok) {
//         console.log(`${response.status} 에러가 발생했습니다`);
//     }
//     return await response.json();
// }