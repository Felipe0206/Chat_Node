import { useContext, useRef } from "react";
import Style from "./Login.module.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div className={Style.login}>
            <div className={Style.loginWrapper}>
                <div className={Style.loginLeft}>
                    <h3 className={Style.loginLogo} >Intopcol</h3>
                    <span className={Style.loginDesc}>
                    Chat corporativo de Intopcol
                    </span>
                </div>
                  
                  
                
                <div className={Style.loginRight}>
                    <div className={Style.etick}>Acceso</div>
                    <form className={Style.loginBox} onSubmit={handleClick}>
                        <input
                            placeholder="Correo electrónico"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Contraseña"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button className={Style.loginButton} type="submit" disabled={isFetching}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Iniciar sesión"
                            )}
                        </button>
                        <span className={Style.loginForgot}>¿Has olvidado tu contraseña?</span>
                        <button className={Style.loginRegisterButton}>
                            {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                            ) : (
                                "Crear una cuenta nueva"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
