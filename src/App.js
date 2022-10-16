import React from "react";
import { ThemeProvider } from 'styled-components';
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./AuthProvider";

const theme = {};

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <AppRouter/>
            </ThemeProvider>
        </AuthProvider>

    );
}

export default App;