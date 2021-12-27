import react from "react";
import Header from "./components/header/header";
import "./styles.scss"
import MainView from './views/MainView'

function App() {
  return (
    <>
      <Header></Header>
      <MainView/>
    </>
  );
}

export default App; 
