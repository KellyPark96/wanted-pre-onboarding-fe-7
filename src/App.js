import React from "react";
import { ThemeProvider } from 'styled-components';
import AppRouter from "./routes/AppRouter";

const theme = {};
const App = () => {
    return (
        <ThemeProvider theme={ theme }>
            <AppRouter/>
        </ThemeProvider>

    );
}

export default App;