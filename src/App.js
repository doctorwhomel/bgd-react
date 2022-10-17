import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import BGD_logo_button from "./app/assets/img/BGD_logo_button.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
