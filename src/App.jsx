import React from "react";
// import { Route, Switch } from "react-router";
import Nav from './nav/Nav.jsx'
import Home from './pages/home/Home.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/index.jsx";


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




