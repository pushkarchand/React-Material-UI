import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import SignUp from "./signup";
import SignIn from "./signin";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
