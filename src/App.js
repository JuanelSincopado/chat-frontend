import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthState from "./Context/authContext/AuthState";
import Login from "./Screens/Login";
import Registrar from "./Screens/Registrar";

function App() {
  return (
    <Router>
      <AuthState>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/registrar" component={Registrar} />
        </Switch>
      </AuthState>
    </Router>
  );
}

export default App;
