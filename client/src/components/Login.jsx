import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        if(username.trim() && password.trim()){
            e.preventDefault();
            console.log({ username, password });
            setPassword("");
            setUsername("");
        }
    };

    return(
        <main className="login">
            <form className="logi__form" onSubmit={handleSubmit}>
                <h2 className="login__title">Log into your account</h2>
                <label htmlFor="username">Username</label>
                <input 
                type="text"
                id="username"
                name='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className="username"
                 />


                 <label htmlFor="password">Password</label>
                 <input 
                 type="text"
                 id="password"
                 name="password"
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)} 
                 />

                 <button className="loginButton">Log in</button>
                 <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Don't have an account? { " " }
                    <Link className="link" to="register">
                    create one
                    </Link>
                 </p>
            </form>
        </main>
    )
}


export default Login;