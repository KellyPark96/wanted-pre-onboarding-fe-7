// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Login from "./routes/Login";
// import SignUp from "./routes/SignUp";
// import Todos from "./routes/Todos";
// import Register from "./routes/Register";
import Login from './routes/Login';

function App() {
    return (
        <main className="App">
            <Login/>
        </main>
        // <BrowserRouter>
        //     <Routes>
        //         <Route path="/" element={<Login/>}></Route>
        //         <Route path="/sign-up" element={<SignUp/>}></Route>
        //         <Route path="/todos" element={<Todos/>}></Route>
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;
