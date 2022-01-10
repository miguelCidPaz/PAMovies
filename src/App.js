import MainView from "./views/MainView";
import Header from './components/header/header';
import Details from './views/Details';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.scss";


function App() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainView />}>
            <Route path="main" element={<MainView />} />
            <Route path="details/:type/:id" element={<Details />} />
            <Route path="*" element={<MainView />} />
          </Route>
        </Routes>
      </Router>,
    </main>
  );
}

export default App; 
