import './App.css';
import LandingPage from "./Pages/LandingPage/LandingPage";
import {Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/videogame/:id' component={Details} />
    </div>
  );
}

export default App;
