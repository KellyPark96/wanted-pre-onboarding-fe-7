import React from "react";
import GlobalStyle from "./style/GlobalStyle"
import AppRouter from "./routes/AppRouter";

const App = () => {
    return (
        <>
        <GlobalStyle/>
        <AppRouter/>
        </>
    );
}

export default App;