import { productos } from "./data/productos.js";
import { crearProducto } from "./js/creacion.js";
import { cargarAlCarrito } from "./js/carrito.js";
import { categorias } from "./data/categorias.js";
import { buscarProductoPalabrasClaves } from "./js/logica/buscador.js";
import { usuarios } from "./data/usuarios.js";

document.addEventListener("DOMContentLoaded", function () {
  // NAVEGACION
  const navs = {
    index: document.querySelector("#inicio-btn"),
    armatupc: document.querySelector("#arma-tu-pc-btn"),
    productos: document.querySelector("#productos-btn"),
    ayuda: document.querySelector("#ayuda-btn"),
    cargarproducto: document.querySelector("#cargar-producto-btn"),
  };
  for (let key in navs) {
    navs[key].addEventListener("click", function () {
      window.location.href = key + ".html";
    });
  }
  document.querySelectorAll(".btn_iniciar_sesion").forEach((btn) => {
    btn.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  });
  document
    .querySelector(".registrarme")
    ?.addEventListener("click", function () {
      window.location.href = "registro.html";
    });

  // CONTENEDOR PRODUCTOS DESTACADOS
  const productosDestacados = document.querySelector(".galeria-productos");
  productos.forEach((producto) => {
    if (producto.categorias.includes("Destacado")) {
      let nuevoProducto = crearProducto(
        producto.titulo,
        producto.precio,
        producto.img,
        producto.categorias,
        producto.stock
      );
      nuevoProducto
        .querySelector(".comprar")
        .addEventListener("click", function () {
          cargarAlCarrito(producto);
        });
      productosDestacados?.appendChild(nuevoProducto);
    }
  });

  // CONTENDOR PRODUCTOS DE LA PAGINA
  const productosSeccion = document.querySelector(".galeria-productos-section");
  productos.forEach((producto) => {
    let nuevoProducto = crearProducto(
      producto.titulo,
      producto.precio,
      producto.img,
      producto.categorias,
      producto.stock
    );
    nuevoProducto
      .querySelector(".comprar")
      .addEventListener("click", function () {
        cargarAlCarrito(producto);
      });
    productosSeccion?.appendChild(nuevoProducto);
  });

  // BUSCADOR
  // BUSCADOR DE PRODUCTOS
  const buscadorInput = document.querySelector("#buscador");
  const buscadorBtn = document.querySelector("#buscar-btn");
  const galeriaBuscador = document.querySelector(".galeria-productos-section");
  document.querySelector("#buscar-btn")?.addEventListener("click", () => {
    let palabras = buscadorInput.value;
    let productos = buscarProductoPalabrasClaves(palabras);
    document.querySelector(".galeria-productos-section").innerHTML = "";
    productos.forEach((p) => {
      let nuevoProducto = crearProducto(
        p.titulo,
        p.precio,
        p.img,
        p.categorias,
        p.stock
      );
      nuevoProducto
        .querySelector(".comprar")
        .addEventListener("click", function () {
          cargarAlCarrito(p);
        });
      document
        .querySelector(".galeria-productos-section")
        .appendChild(nuevoProducto);
    });
  });

  // AYUDA EVENTOS

  // CARGAR PRODUCTO EVENTOS
  const categoriaList = document.getElementById("categoria-list");
  /** Aqui se deberan cargar las categorias de data */
  categorias.forEach((categoria) => {
    console.log(categoria);
    let nuevaCategoria = `
        <li><input type="checkbox" id="categoria-${categoria}" name="categoria" value="${categoria}"><label for="categoria-${categoria}">${categoria}</label></li>
        `;
    if (categoriaList) {
      categoriaList.innerHTML = categoriaList.innerHTML + nuevaCategoria;
    }
  });

  // INICIO DE SESION EVENTOS
  const banners = {
    normal: document.querySelector(".normal__banner"),
    user: document.querySelector(".user__banner"),
  };

  const loginForm = document.getElementById("login-form");
  const overlay = document.getElementById("overlay-error");

  const botonLogin = document.querySelector(".iniciar-sesion-btn-form");
  const botonLogout = document.querySelector(".btn_cerrar_sesion");

  // Verificar si el usuario está autenticado (usando cookies o sesiones en el servidor)
  const usuarioAutenticado = obtenerEstadoAutenticacion(); // Implementa esta función

  if (usuarioAutenticado) {
    botonLogout?.classList.remove("hidden");

    banners.normal.classList.add("hidden");
    banners.user.classList.remove("hidden");
  } else {
    botonLogin?.classList.remove("hidden");
    botonLogout?.classList.add("hidden");

    banners.normal.classList.remove("hidden");
    banners.user.classList.add("hidden");
  }

  // Agregar controladores de eventos de clic
  document
    .querySelector(".login-form")
    ?.addEventListener("submit", function (event) {
      event.preventDefault();

      console.log("ESTAMOS LOGUEANDONOS");
      // Campos
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      console.log(email);
      // Realiza las validaciones de email y contraseña aquí
      if (
        // AQUI COMPARO CONTRA LOS DATOS QUE YA TENGO DE USUARIO REGISTRADOS
        estaRegistrado(email)
      ) {
        if (coincideContrasenia(email, password)) {
          console.log("logueo correcto");
          iniciarSesion();
          window.location.href = "index.html";
        } else {
          mostrarOverlay("Contraseña erronea");
        }
      } else {
        mostrarOverlay("El email no esta registrado");
      }
    });

  // CERRAR SESION
  botonLogout?.addEventListener("click", function () {
    console.log("SACAME YAAAAAAAAAA");
    cerrarSesion();
  });

  // REGISTRO EVENTOS
  //------------------
});

// EVENTO DE CONFIRMACION
export const tipoConfimacion = {
  normal: "confirmacion",
  exito: "confirmacion-exitosa",
  error: "confirmacion-error",
};
export function mensajeConfirmacion(tipo, msj) {
  const confirmacionElement = document.querySelector("#confirmacion");

  confirmacionElement.classList.add(tipo);
  confirmacionElement.textContent = msj;
  confirmacionElement.classList.remove("hidden");

  setTimeout(() => {
    confirmacionElement.textContent = "";
    confirmacionElement.classList.remove(tipo);
    confirmacionElement.classList.add("hidden");
  }, 2000);
}

//

// AUTENTICACION COOKIES
// Cuando el usuario inicia sesión con éxito
function iniciarSesion() {
  // Define la duración de la cookie en días
  const duracionDias = 1; // Puedes ajustar esto según tus necesidades

  // Calcula la fecha de vencimiento de la cookie
  const fechaVencimiento = new Date();
  fechaVencimiento.setTime(
    fechaVencimiento.getTime() + duracionDias * 24 * 60 * 60 * 1000
  );

  // Crea la cookie con un nombre "sesion" y un valor "activa" que indica la sesión activa
  document.cookie = `sesion=activa; expires=${fechaVencimiento.toUTCString()}; path=/`;

  // Redirecciona al usuario a la página principal o a donde desees después de iniciar sesión
  console.log(window.location.href);
}
function obtenerEstadoAutenticacion() {
  // Verificar si hay una cookie de sesión de usuario
  const usuarioAutenticado = document.cookie.includes("sesion=activa");
  return usuarioAutenticado;
}

// Borrar la cookie "sesion"
function cerrarSesion() {
  // Establece la cookie "sesion" con una fecha de expiración en el pasado
  document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

  // Redirecciona al usuario a la página de inicio de sesión o a donde desees después de cerrar la sesión
  window.location.href = window.location.href;
}

function estaRegistrado(email) {
  // CHEQUEA CONTRA LOS EMAILS REGISTRADOS
  for (let user of usuarios) {
    if (user.email == email) return true;
  }

  return false;
}
export function estaLogueado() {
  return obtenerEstadoAutenticacion() ? true : false;
}
function coincideContrasenia(email, contrasenia) {
  // CHEQUEA QUE LA CONTRASENIA ESTA ASOCIADA AL EMAIL
  for (let user of usuarios) {
    if (user.email == email && user.contrasenia == contrasenia) return true;
  }

  return false;
}
function mostrarOverlay(msj) {
  document.querySelector("#overlay-error").textContent = msj;
  document.querySelector("#overlay-error").classList.remove("hidden");
}
