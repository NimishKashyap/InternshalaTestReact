import React, { useState } from "react";

function Register({ history }) {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const array = [];

    const handleRegister = (e) => {
        e.preventDefault();
        if (ValidateEmail({ name, email, mobile, password })) {
            var userPrev = localStorage.getItem("users") || "[]";
            var userPrevArr = JSON.parse(userPrev);

            const user = { name, email, mobile, password };
            userPrevArr.push(user);
            
            localStorage.setItem("users", JSON.stringify(userPrevArr));
            console.log("Success");
            history.push("/login");
        } else {
            console.log("Unsuccess");
        }
    };

    const ValidateEmail = (input) => {
        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const nameRegex = /^[a-zA-Z\s]*$/;
        const numberRegex = /^[0-9]{10}$/;
        const passwordRegex =
            /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;

        if (
            input.email.match(validRegex) &&
            input.name.match(nameRegex) &&
            input.mobile.match(numberRegex) &&
            input.password.match(passwordRegex)
        ) {
            alert("Success!");

            return true;
        } else {
            alert("Unsuccess!");

            return false;
        }
    };

    return (
        <form action="" autoComplete={false}>
            <h1
                style={{
                    fontWeight: "600",
                    fontSize: "30px",
                }}
            >
                Welcome
            </h1>
            <p
                style={{
                    color: "rgba(0,0,0,0.5)",
                }}
            >
                Please Register your account.
            </p>
            <input
                style={{
                    marginTop: "60px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                className="focused"
                type="text"
                name="username"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                className="focused"
                type="number"
                name="Mobile Number"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
            />
            <input
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                className="focused"
                type="email"
                name="Email ID"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    padding: "10px",
                    border: "none",
                    borderBottom: "2px solid #eee",
                }}
                className="focused"
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
                type="submit"
                onClick={handleRegister}
            >
                Login
            </button>
        </form>
    );
}

export default Register;
