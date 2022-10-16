import React from "react";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./AuthProvider";

const theme = {};

const App = () => {
    return (
        <AuthProvider>
            <AppRouter/>
        </AuthProvider>
    );
}

export default App;