import React, { useEffect, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {

  let URL = process.env.REACT_APP_ENVIRONMENT
  const cookies = new Cookies();
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClickPassword = () => {
    setErrorPassword(false);
  };

  const handleClickEmail = () => {
    setErrorEmail(false);
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (values.email === "" && values.password === "") {
      setErrorEmail(true);
      setErrorPassword(true);
      return;
    }

    if (values.email === "") {
      setErrorEmail(true);
      return;
    }

    if (values.password === "") {
      setErrorPassword(true);
      return;
    }

    // fetch("http://localhost:3001/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Acept: "application/json",
    //   },
    //   body: JSON.stringify(values),
    // })
    // fetch("http://localhost:3001/login", {
  console.log("URL---->",URL)
    fetch(`${URL}/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Acept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.status === 200) {
          cookies.set("email", values.email, {
            secure: true,
            sameSite: "None",
            path: "/",
          });
          window.location.hash = "/sesion";
        } else {
          Swal.fire({
            title: "Las credenciales ingresadas no son correctas",
            icon: "error",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "No se puede iniciar sesión por un problema en el servidor",
          icon: "error",
        });
      });
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    cookies.set("email", credentialResponse.email, {
      secure: true,
      sameSite: "None",
      path: "/",
    });
    window.location.hash = "/sesion";
  };

  const handleGoogleLoginFailure = (error) => {
    Swal.fire({
      title: "Error al iniciar sesión con Google",
      text: error.message,
      icon: "error",
    });
  };

  useEffect(() => {
    if (cookies.get("email")) {
      window.location.hash = "/sesion";
    }
  }, []);

  return (
    <div>
      <Header />
      <form onSubmit={iniciarSesion}>
        <section className="vh-100" style={{ backgroundColor: "#eee" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card shadow-2-strong rounded">
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        <b>Email</b>
                      </label>
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        name="email"
                        onChange={handleChange}
                        placeholder="Ingresa tu Correo"
                      />
                      {errorEmail ? <p>Debe ingresar un email</p> : ""}
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        <b>Password</b>
                      </label>
                      <input
                        type={showPassword ? "password" : "text"}
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        name="password"
                        onChange={handleChange}
                        placeholder="Ingresa tu Contraseña"
                      />
                      {errorPassword ? <p>Debe ingresar una contraseña</p> : ""}
                    </div>
                    <div className="d-grid gap-2 col-15 mx-auto">
                      <button
                        className="btn btn-lg btn-block"
                        type="submit"
                        style={{ backgroundColor: "#18D2E1" }}
                      >
                        Login
                      </button>
                    </div>
                    <hr className="my-20" />
                    <div className="d-grid gap-2 col-15 mx-auto">
                      <GoogleOAuthProvider clientId="TU_GOOGLE_CLIENT_ID">
                        <GoogleLogin
                          onSuccess={handleGoogleLoginSuccess}
                          onError={handleGoogleLoginFailure}
                        >
                          <GoogleIcon /> Iniciar sesión con Google
                        </GoogleLogin>
                      </GoogleOAuthProvider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
