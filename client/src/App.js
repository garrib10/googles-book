import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SaveBooks from "./pages/SaveBooks";
import SearchBooks from "./pages/SearchBooks";
import NavBar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved" component={SaveBooks} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
