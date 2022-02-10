import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Cakes from "./components/Cakes";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Cakes/>
        </ThemeProvider>
    )
}

export default App;
