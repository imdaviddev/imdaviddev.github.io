const createElementCarrito = () => {
let carrito = document.createElement("div");
    carrito.innerHTML = `
    <div id="cerrar-carrito">
        <p>X</p>
    </div>
    <div class="carrito__" id="carrito">
        <ul class="productos-en-carrito">
            <li class="product">
                <div class="imagen">
                    <img src="assets/componentes/CPU - Intel Core I5 8gb SSD240gb .webp" alt="" />
                </div>

                <div class="contenido-producto">

                    <div class="descripcion">
                        <p>PRODUCTO</p>
                    </div>
                    
                    <div class="pie-producto">
                        <div class="funcion-cantidad">
                            <button>-</button>
                            <p class="cantidad-total">1</p>
                            <button>+</button>
                        </div>
                        <p>$<span class="total-producto">1000</span></p>
                    </div>
                </div>

            </li>
        </ul>
    </div>
    `
    return carrito;
};

const Carrito = createElementCarrito();
export default Carrito;