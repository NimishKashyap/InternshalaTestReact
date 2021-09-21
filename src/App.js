import "./App.css";
import Auth from "./components/Auth";
import Image from "./components/Image";
import image from "./assets/ocean.jpg";
import Login from "./components/Login";
import Register from "./components/Register";
import Users from "./components/Users";
import {
    BrowserRouter as Router,
    Link,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <div className="left">
                        <img src={image} alt="image" />
                    </div>
                    <div className="right">
                        <Switch>
                            <Route exact path="/" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/user" component={Users} />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
