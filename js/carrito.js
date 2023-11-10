import { estaLogueado, mensajeConfirmacion, tipoConfimacion } from "../index.js";
import { crearProductoEnCarrito } from "./creacion.js";

/** */
const productosDentroDelCarrito = []

/** EVENTOS CARRITO */
const carrito = document.querySelector(".contenedor-carrito");
const productosEnCarrito = carrito.getElementsByClassName("product");

// CERRRAR--ABRIR CARRITO
const btnCarrito = document.getElementById("btn-carrito");
btnCarrito.addEventListener("click", function () {
    carrito.classList.toggle("hidden");
    /** ACA VA LA LOGICA PARA CUANDO VUELVA A ABRIR EL CARRITO SE CARGUEN LOS PRODUCTOS ALMACENADOS EN OTRA PAGINA */
});
const btnCerrarCarrito = document.getElementById("cerrar-carrito");
btnCerrarCarrito.addEventListener("click", cerrarCarrito);
function cerrarCarrito() {
    carrito.classList.add("hidden");
}

// FUNCIONES DE ESTADO DE EL CARRITO
var contadorCarrito = 0;
export function setContadorCarrito(num) {
    if (num < 0) {
        return;
    }

    if(num == 0) setCarritoVacio(true);
    if(num > 0 ) setCarritoVacio(false);

    contadorCarrito = num;

    // CONTADOR DE PRODUCTOS DENTRO DEL CARRITO
    let contador = document.getElementById("contador-carrito");
    if(contador){
        contador.textContent = contadorCarrito;
    }
}
var carritoVacio = true;
function setCarritoVacio(state) {
    carritoVacio = state;
    if (carritoVacio) {
        document.getElementById("comprar-carrito-btn")?.classList.add("hidden");
        document.getElementById("mensaje-carrito-vacio")?.classList.remove("hidden")
    } else {
        document.getElementById("comprar-carrito-btn")?.classList.remove("hidden");
        document.getElementById("mensaje-carrito-vacio")?.classList.add("hidden");
    }
}

// EVENTO AGREGAR AL CARRITO
export function cargarAlCarrito(producto){
    // -AQUI IRA LA LOGICA PARA MOSTRAR O NO EL BOTON DE COMPRAR-
    setCarritoVacio(false)
    // -------------------------------------------------------
    let productoEsta = false;
    for(const p of document.querySelectorAll(".product")){
        if(p.querySelector(".id_producto")?.textContent == producto.titulo){
            productoEsta = true;
            break;       
        }
    }

    if(productoEsta){
        mensajeConfirmacion(tipoConfimacion.normal, "¡El producto ya esta en el carrito!")
        return null
    }else{
        let nuevoProducto = crearProductoEnCarrito(producto.titulo, producto.precio, producto.img)
        document.querySelector(".productos-en-carrito").appendChild(nuevoProducto);    
        mensajeConfirmacion(tipoConfimacion.exito, "¡El producto se cargo correctamente al carrito!")
        return nuevoProducto;
    }
}

// EVENTO COMPRAR
const comprarCarritoBtn = document.getElementById("comprar-carrito-btn");
comprarCarritoBtn?.addEventListener("click", () => {
    if(estaLogueado()){
        vaciarCarrito();
        mensajeConfirmacion(tipoConfimacion.exito, "¡Su compra ha sido realizada con exito!")
    }else{
        mensajeConfirmacion(tipoConfimacion.error, "¡No estas logueado!")
    }
});
function vaciarCarrito() {
    const productosEnCarrito = document.getElementsByClassName(
        "productos-en-carrito"
    )[0];
    while (productosEnCarrito.firstChild) {
        productosEnCarrito.removeChild(productosEnCarrito.firstChild);
    }
    setCarritoVacio(true);
    setContadorCarrito(0);
}

export function actualizarEstadoCarrito(){
    // SE ELIMINO UN PRODUCTO
    setContadorCarrito(contadorCarrito - 1)

    if(document.querySelector(".productos-en-carrito").children.length == 0){
        setCarritoVacio(true)
        setContadorCarrito(0)
    }else{
        setCarritoVacio(false)
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    setCarritoVacio(true);
})
