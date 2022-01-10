import Header from "./components/header/header";
// import FilmDetails from "./views/FilmDetails";
import ListSearch from "./components/listSearch/listSearch";
import MainView from "./views/MainView";
import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./views/Details";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/listSearch" element={<ListSearch />} />
          <Route path="/details/:type/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
