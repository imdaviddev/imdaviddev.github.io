
const CreateElemnetLogin = () => {
    let login = document.createElement("div");
    login.innerHTML =  `
    <div class="contenedor-login">
      <div class="container">
        <form class="login-form">
          <h1>Iniciar Sesion</h1>
          <div class="contenedor">
            <div class="login-iniciar">
                <img src="assets/iconos/correo-icon.png" class="login-icon" alt="">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ingresa correo"
                  required
                />
              </div>

              <div class="login-contrasenia">
                <img src="assets/iconos/contrasenia-icon.png" class="login-icon" alt="">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="ingresa clave"
                  required
                />
              </div>
          </div>

          <div class="opciones-login">
            <p class="registrarme">
                Registrarme
            </p>
            <p class="olvido-contrasenia">
                Olvide mi clave
            </p>
          </div>

          <button type="submit" class="iniciar-sesion-btn-form">Iniciar Sesión</button>
          
        </form>
      </div> 
    </div>

    <div id="overlay" class="overlay">
      <div class="error-message">
          <p>Email/Contraseña incorrectos</p>
      </div>
    </div>
  `
    return login;
};
const Login = CreateElemnetLogin();

export default Login;