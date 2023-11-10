const createElementProductos = () => {
    let productos = document.createElement("div");
    productos.innerHTML =  `
    <!-- Productos -->
    <div class="productos-section">
        <div class="side-bar">
            <div class="contenedor-buscador">
                <input type="text" id="buscador" placeholder="Buscar productos">
                <button id="buscar-btn">Buscar</button>
            </div>        
        </div>

        <div class="contenedor-productos">
            <div class="galeria-productos-section">
            <!-- Un Producto -->
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/CPU - Intel Core I5 8gb SSD240gb .webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">CPU Intel Core i5 8gb SSD240gb</p>
                    <div class="precio">
                        $20000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
            </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/Disco Duro Interno - 2TB.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">Disco Duro Interno 2TB</p>
                    <div class="precio">
                        $1000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
            </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/PC Armada Gamer - Amd Ryzen 5 5600g 12 Nucleos Ram 16gb SSD480.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">PC Armada Gamer Ryzen 5</p>
                    <div class="precio">
                        $1000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
            </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/Ryzen - 5.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">Ryzen 5</p>
                    <div class="precio">
                        $1000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
            </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/Placa.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">Motherboard</p>
                    <div class="precio">
                        $2000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
            </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/Placa.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">Motherboard</p>
                    <div class="precio">
                        $2000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
             </div>
            <div class="producto">
                <div class="producto-imagen">
                    <img src="assets/componentes/Placa.webp" alt="">
                </div>
                <div class="detalle-producto">
                    <p class="titulo-producto">Motherboard</p>
                    <div class="precio">
                        $2000
                    </div>
                </div>
                <div class="comprar">
                    Añadir al Carrito
                </div>
             </div>
            </div>
        </div>
    </div>
    `

    return productos;
};
const Productos = createElementProductos();
export default Productos;