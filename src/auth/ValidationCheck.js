export const validEmail = (email) => {
    let regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return regEmail.test(email);
}

export const validPassword = (password) => {
    return password.length >= 8;
};

export const validAuth = (email, password) => {
    return !(validEmail(email) && validPassword(password));
};