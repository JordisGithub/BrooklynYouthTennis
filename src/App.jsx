import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from '@mui/material/styles';
import { AboutUs, ContactUs, DonatePage, GetInvolved, Home, OurPrograms, Register } from './pages';
import theme from "./theme/index.jsx";
import Nav from './components/nav/Nav.jsx'
import Footer from "./components/footer/Footer.jsx";


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
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;




