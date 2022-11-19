import { useState } from "react";
import Button from "../UI/Button";
import "../UI/styles/Input.css";
import "./styles/Login.css";

function Login({setLogged}) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    function tryLogin(e) {
        e.preventDefault();
        localStorage.setItem("isLogged", "true");
        if (true/*login === "" && password === ""*/) {
            setLogged(true);
        } else {
            setError(true);
            setTimeout(() => setError(false), 1000);
        }
    }

    return (
        <form className="login-form" onSubmit={tryLogin} spellCheck="false">
            <label>
                <span>Логин:</span>
                <input type="text" className="input-standard"
                       onChange={e => setLogin(e.target.value)}/>
            </label>
            <label>
                <span>Пароль:</span>
                <input type="password" className="input-standard"
                       onChange={e => setPassword(e.target.value)}/>
            </label>
            <Button text="Войти"/>
            {error ? <span style={{color: "red"}}>Неверный логин или пароль</span> : ""}
        </form>
    );
}

export default Login;
