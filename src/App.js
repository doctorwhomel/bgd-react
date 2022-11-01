import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import BGD_logo_button from "./app/assets/img/BGD_logo_button.png";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchGames } from "./features/games/gamesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
