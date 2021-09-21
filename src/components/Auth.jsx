import React from "react";
import Login from "./Login";
import Register from "./Register";

function Auth({ hasAccount }) {
    const account = hasAccount;
    return <>{hasAccount ? <Login /> : <Register />}</>;
}

export default Auth;
