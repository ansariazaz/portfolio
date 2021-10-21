import Home from "../src/Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projectdetail from "./Components/Projectdetail";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/Projectdetail" exact component={Projectdetail}></Route>
          <Route path="/Projects" exact component={Projects}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/projects/:id"  component={Projectdetail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
