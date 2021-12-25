import Home from "../src/Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projectdetail from "./Components/Projectdetail";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
        <Switch>
         
          <Route path="/" component={Home} exact></Route>
          <Route path="/Projectdetail" exact component={Projectdetail}></Route>
          <Route path="/Projects" exact component={Projects}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/ContactForm" component={ContactForm}></Route>
          <Route path="/projects/:id"  component={Projectdetail}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
