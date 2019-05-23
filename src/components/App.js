import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
