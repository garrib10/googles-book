import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/search" component={SearchBooks} />
          <Route exact path="/saved" component={SavedBooks} />
          
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
