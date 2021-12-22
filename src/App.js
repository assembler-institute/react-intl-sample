import "./styles.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./routing/PrivateRoute";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </>
  );
}
