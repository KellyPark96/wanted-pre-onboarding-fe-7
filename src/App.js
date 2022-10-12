import {Route, Routes} from "react-router-dom";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Todos from "./components/Todos";
import RequireAuth from "./components/RequireAuth";

function App() {

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            {/*<Route element={<RequireAuth/>}>*/}
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/todos" element={<Todos/>}/>
            {/*</Route>*/}
        </Routes>
    );
}

export default App;