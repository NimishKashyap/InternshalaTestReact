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
import { useState } from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <Router>
            <div className="App">
                <div className="container">
                    <div className="left">
                        <img src={image} alt="image" />
                    </div>
                    <div className="right">
                        <Switch>
                            <Route exact path="/">
                                <Register />
                            </Route>
                            <Route exact path="/login">
                                <Login setLoggedIn={setLoggedIn} />
                            </Route>

                            <Route exact path="/user">
                                {loggedIn ? <Users /> : alert("Login First")}
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
