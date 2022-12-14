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
import GamesDir from "./pages/GamesDir";
import StudiosDir from "./pages/StudiosDir";
import ArtistsDir from "./pages/ArtistsDir";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { fetchPosts } from "./features/posts/postsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesDir />} />
        <Route path="/studios" element={<StudiosDir />} />
        <Route path="/artists" element={<ArtistsDir />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
