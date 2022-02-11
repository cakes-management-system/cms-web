import React from 'react';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Cakes from "./components/cakes/Cakes";
import CssBaseline from "@mui/material/CssBaseline";
import {CsmAppBar} from "./components/general/CsmAppBar";
import {Footer} from "./components/general/Footer";

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <CsmAppBar name={'Cakes'}/>
            <main>
                <Cakes/>
            </main>
            <Footer text={'Something here to give the footer a purpose!'}/>

        </ThemeProvider>
    )
}

export default App;
