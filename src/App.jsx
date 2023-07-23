import React from "react";
import { Route, Routes } from "react-router";
import Nav from './components/nav/Nav.jsx'
import { AboutUs, ContactUs, DonatePage, GetInvolved, Home, OurPrograms, Register } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme/index.jsx";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate-page" element={<DonatePage />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/register" element={ <Register />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;




