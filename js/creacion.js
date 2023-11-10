import { actualizarEstadoCarrito } from "./carrito.js";

/** FUNCIONES PARA CREAR VARIAS COSAS */
export function crearProducto(titulo, precio, imagenURL, categorias, stock){

    const categoriasHTML = categorias.map(categoria => `<span class="badge" style="background-color: ${colorAleatorioParaBadge()};">${categoria}</span>`).join('');

    let nuevoProducto = `
        <div class="producto-imagen">
            <img src="${imagenURL}" alt="">
        </div>
        <div class="detalle-producto">
            <p class="titulo-producto">${titulo}</p>
            <div class="precio">
                $${precio}
            </div>
            <div class="stock">
                <span>Stock: </span>${stock}
            </div>
            <div class="categorias">
                ${categoriasHTML}
                <!-- Agrega más etiquetas de categoría según sea necesario -->
            </div>
        </div>
        <div class="comprar">
            Añadir al Carrito
        </div>
    `

    let producto = document.createElement("div");
    producto.classList="producto";
    producto.innerHTML = nuevoProducto;

    
    return producto;
}

export function crearProductoEnCarrito(titulo, precio, imagenURL){
    let nuevoProducto = `
    <div class="imagen">
        <img src=${imagenURL} alt="" />
    </div>

    <div class="contenido-producto">
        <div class="descripcion">
            <p class="id_producto">${titulo}</p>
        </div>
        <div class="pie-producto">
            <div class="funcion-cantidad">
                <button>-</button>
                <p class="cantidad-total">1</p>
                <button>+</button>
            </div>
            <p>$<span class="total-producto">${precio}</span></p>
        </div>
    </div>
    `;
    

    let producto = document.createElement("li");
    producto.classList = "product";
    producto.innerHTML = nuevoProducto;

    // EVENTOS
    var contador = parseInt(producto.querySelector(".cantidad-total").textContent);
    function setContador(numero){
        contador = numero;
        producto.querySelector(".cantidad-total").textContent = numero;
    }
    var precioTotal = precio;
    function setPrecio(precio){
        precioTotal = precio;
        producto.querySelector(".total-producto").textContent = precio;
    }
    producto.querySelectorAll("button")[0].addEventListener("click", function(){
        setContador(contador - 1)
        setPrecio(precioTotal - precio)

        if(contador <= 0){
            if(producto.parentNode){
                producto.parentNode.removeChild(producto);
                actualizarEstadoCarrito();
            }
        }
    });
    producto.querySelectorAll("button")[1].addEventListener("click", function(){
        setContador(contador + 1)
        setPrecio(precioTotal + precio)
    })

    return producto;
}


function colorAleatorioParaBadge() {
    const colores = [
        "#4CAF50",  // Verde
        "#2196F3",  // Azul
        "#F44336",  // Rojo
        "#FFC107",  // Amarillo
        "#FF9800",  // Naranja
        "#9C27B0",  // Morado
        "#9E9E9E",  // Gris
        "#E91E63",  // Rosa
        "#00BCD4",  // Turquesa
        "#795548"   // Marrón
    ];

    const indiceAleatorio = Math.floor(Math.random() * colores.length);
    return colores[indiceAleatorio];
}
