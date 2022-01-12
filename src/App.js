import React from "react";
import "./styles.scss";
import Header from "./components/header/header";
// import FilmDetails from "./views/FilmDetails";
import ListSearch from "./components/listSearch/listSearch";
import MainView from "./views/MainView";
import GendersView from "./views/GendersView";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./views/Details";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/details/:type/:id" element={<Details />} />

          <Route path="/" element={<MainView />} />
          <Route path="/animation" element={<GendersView />} />
          <Route path="/listSearch" element={<ListSearch />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
