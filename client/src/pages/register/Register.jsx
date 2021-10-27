import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("¡Las contraseñas no coinciden!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Intopcol</h3>
          <span className="loginDesc">
          Chat corporativo de Intopcol.
          </span>
        </div>
        <div className="loginRight">
        <div className="etick">Registro</div>
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Nombre de usuario"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Contraseña"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Contraseña de nuevo"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
            Registrarse
            </button>
            <button className="loginRegisterButton">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </div>
  );
}
