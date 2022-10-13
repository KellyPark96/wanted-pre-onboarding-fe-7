import {Route, Routes} from "react-router-dom";
import Login from './routes/Login';
import SignUp from "./routes/SignUp";
import Todos from "./routes/Todos";
import RequireAuth from "./components/RequireAuth";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/todos" element={<Todos/>}/>
            {/*<Route element={<RequireAuth/>}>*/}
            {/*</Route>*/}
        </Routes>
    );
}

export default App;