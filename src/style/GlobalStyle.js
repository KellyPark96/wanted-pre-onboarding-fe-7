import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'Noto Sans', sans-serif;
    font-size: 22px;
    color: #333;
    min-height: 100vh;
    background-color: #4681c3;
  }

  form {
    display: flex;
    justify-content: space-evenly;
  }
  
  section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 5%;
    background-color: #FFF;
  }
  
  ul {
    list-style: none;
  }

  input[type="text"],
  input[type="password"] {
    outline: none;
    font-family: 'Noto Sans', sans-serif;
    text-indent: 5px;
    border-radius: 5px;
    font-size: 19px;
    border: 1px solid #333;
  }
  
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;