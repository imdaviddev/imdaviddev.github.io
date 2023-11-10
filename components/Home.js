const createElementHome = () => {
    let home = document.createElement("div");
    home.innerHTML =  ` 
    <!-- Bienvenida Section -->
    <div class="bienvenido-section">
        <div class="wrapper-bienvenida">
            <h1 class="titulo-bienvenida">Arma Tu PC a tu medida</h1>
            <p>accede a todas las ventajas</p>
            <a class="ingresa-ya-btn btn_iniciar_sesion">Ingresa Ya</a>
        </div>
    </div>

    <!-- Productos Destacados -->
    <div class="productos-destacados">
        <div class="titulo-productos-destacados">
            <p>Productos destacados</p>
        </div>

        <!-- Galeria de Productos -->
        <div class="galeria-productos">
            
        </div>
    </div>`

    return home;
};
const Home = createElementHome();

export default Home;