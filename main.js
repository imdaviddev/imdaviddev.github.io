import { agregarProductoAlCarrito } from "./js/carrito.js";
import { crearProducto, crearProductoEnCarrito } from "./js/creacion.js";

//
class Producto(titulo, precio, img){
    
}


// CARRITO VARIABLE
var carrito = [];
localStorage.setItem("carrito", JSON.stringify(carrito));

function carritoAgregarProducto(producto){
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
// ---------------------------------------------------------

// USUARIO CORRECTO DE PRUEBA
const usuarioCorrecto = {
    email: "pepito@gmail.com",
    contrasenia: "1234",
}

// LOS DIFERENTES LINKS DE LA PAGINAS
const navs = {
    index: document.querySelector("#inicio-btn"),
    armatupc: document.querySelector("#arma-tu-pc-btn"),
    productos: document.querySelector("#productos-btn"),
    ayuda: document.querySelector("#ayuda-btn"),
};

// ESPERO A QUE SE CARGUE EL DOCUMENTO
document.addEventListener("DOMContentLoaded", ready());
function ready() {
    // PRUEBA DEL LOCALSTORAGE
    carrito.push();
    console.log(JSON.parse(localStorage.getItem("carrito")))


    const iniciarSesionBtns =
        document.getElementsByClassName("btn_iniciar_sesion");
    // SETEAR LOS LINKS
    for (let key in navs) {
        navs[key].addEventListener("click", () => {
            window.location.href = "./" + key + ".html";
        });
    }
    for (let i = 0; i < iniciarSesionBtns.length; i++) {
        iniciarSesionBtns[i].addEventListener("click", () => {
            window.location.href = "./login.html";
        });
    }

    // AGREAGR PRODUCTOS DE EJEMPLO EN EL CARRITO
    document
        .querySelector(".productos-en-carrito")
        .appendChild(
            crearProductoEnCarrito(
                "PRODUCTO",
                20000,
                "./assets/componentes/8-gb-ram.webp"
            )
        );

    // AGREGAR PRODUCTOS DESTACADOS A LA PAGINA
    let productoPrueba = crearProducto("COMPONENTE", 20000, "./assets/componentes/8-gb-ram.webp")
    productoPrueba.querySelector(".comprar").addEventListener("click", () => {
        agregarProductoAlCarrito(productoPrueba);
    });
    document
        .querySelector(".galeria-productos")
        .appendChild(
            productoPrueba
        );
    document
        .querySelector(".galeria-productos")
        .appendChild(
            crearProducto("COMPONENTE", 20000, "./assets/componentes/8-gb-ram.webp")
        );
    document
        .querySelector(".galeria-productos")
        .appendChild(
            crearProducto("COMPONENTE", 20000, "./assets/componentes/8-gb-ram.webp")
        );
    // ---------------------------------------------------------------------


    // ---------------------------------------------------------------------------

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

    loginForm
        .querySelector(".iniciar-sesion-btn-form")
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
}
