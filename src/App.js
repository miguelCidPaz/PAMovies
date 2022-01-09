import React from "react";
import "./styles.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import Header from "./components/header/header";
import MainView from "./views/MainView";
import GendersView from "./views/GendersView";
import GenreType from "./components/Main/GenreType";
// import FilmDetails from "./views/FilmDetails";


function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainView/>}/>
          <Route path="/animation" element={<GendersView/>} />
        </Routes>
    </Router>
  );
}

export default App;
