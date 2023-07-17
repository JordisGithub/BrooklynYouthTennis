import React from "react";
// import { Route, Switch } from "react-router";
import Nav from './nav/Nav'
import Home from './pages/home/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;




