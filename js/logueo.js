    /** EVENTOS DE INICIO DE SESION */
    var isLogging = false;
    function setLogging(state) {
        isLogging = state;
        if (isLogging) {
            document.querySelector(".normal__banner").classList.add("hidden");
            document.querySelector(".user__banner").classList.remove("hidden");
        } else {
            document.querySelector(".normal__banner").classList.remove("hidden");
            document.querySelector(".user__banner").classList.add("hidden");
        }
    }
    const loginForm = document.getElementById("login-form");
    const overlay = document.getElementById("overlay");

    loginForm?.querySelector("button")
        .addEventListener("click", function (e) {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            console.log(email);
            // Realiza las validaciones de email y contraseña aquí
            if (
                email === usuarioCorrecto.email &&
                password === usuarioCorrecto.contrasenia
            ) {
                console.log("logueo correcto");
                window.location.href = "index.html";
            } else {
                // Muestra el overlay de mensaje de error
                overlay.style.display = "block";
            }
        });

    // -------------------------------------------------------------------------------

    /** EVENTOS REGISTRARSE EN LA PAGINA */

    // -------------------------------------------------------------------------------