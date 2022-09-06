import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import {Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import CreateVideoGame from "./Pages/CreateVideogame/CreateVideoGame";

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/videogame/:id' component={Details} />
        <Route exact path='/videogame' component={CreateVideoGame} />
    </div>
  );
}

export default App;
