import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import CssBaseline from "@mui/material/CssBaseline";

const DashboardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
`;

function App() {
  return (
    <DashboardWrapper>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Layout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DashboardWrapper>
  );
}

export default App;
