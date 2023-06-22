import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { handleRegister } from "../utils/ressources";

const Signup=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username.trim() && password.trim() && email.trim()){
            console.log(email, username, password);
            setPassword("");
            setUsername("");
            setEmail("");
        }
    };

    return(
        <main className="signup">
            <form className="signup__form" onSubmit={handleSubmit}>
                <h2 className="signup__title">Create an account</h2>
                <label htmlFor="email">Email adress</label>
                <input 
                type="email" 
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="username">Username</label>
                <input 
                type="text"
                id="username"
                name="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                name="password"
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />

                <button className="signupButton">Register</button>
                <p style={{textAlign: "center", marginTop: "30px"}}>
                    Already have an account?{" "}
                    <Link className="link" to="/">
                        Sign in
                    </Link>
                </p>
            </form>
        </main>
    )
}

export default Signup;