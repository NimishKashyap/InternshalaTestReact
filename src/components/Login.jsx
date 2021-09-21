import React, { useState } from "react";

function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const usersArray = JSON.parse(localStorage.getItem("users"));
        usersArray.forEach((user) => {
            if (user.email === email && user.password === password) {
                alert("Login Success");
                history.push("/user");
            }
        });
        
    };
    return (
        <form action="" autoComplete={false}>
            <h1
                style={{
                    fontWeight: "600",
                    fontSize: "30px",
                }}
            >
                Welcome Back!
            </h1>
            <p
                style={{
                    color: "rgba(0,0,0,0.5)",
                }}
            >
                Please login to your account.
            </p>
            <input
                style={{
                    marginTop: "60px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                type="text"
                name="username"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px",
                    marginTop: "20px",
                    marginBottom: "20px",
                }}
            >
                <input
                    type="checkbox"
                    style={{
                        marginLeft: "5px",
                        marginRight: "5px",
                        padding: "10px",
                    }}
                />
                <p
                    style={{
                        marginRight: "10px",
                        fontSize: "15px",
                    }}
                >
                    Remember Me
                </p>
                <a
                    style={{
                        marginLeft: "10px",
                        fontSize: "15px",
                    }}
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
            <button
                style={{
                    textDecoration: "none",
                    border: "none",
                    padding: "10px",
                    borderRadius: "20px",
                    backgroundColor: "#61acb3",
                    color: "white",
                    fontSize: "15px",
                    cursor: "pointer",
                }}
                onClick={handleLogin}
            >
                Login
            </button>
        </form>
    );
}

export default Login;
