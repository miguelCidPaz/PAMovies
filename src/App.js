import FilmDetails from "./views/FilmDetails";
import MainView from './views/MainView'
import "./styles.scss";
import Header from './components/header/header'

function App() {
  return (
    <main>
      <Header />
      <MainView/>
    </main>
  );
}

export default App; 
