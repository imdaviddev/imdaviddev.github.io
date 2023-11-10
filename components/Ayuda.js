const createElementAyuda = () => {
    let ayuda = document.createElement("div");
    ayuda.innerHTML =  `
    <div class="wrapper-ayuda">
        <div class="contenedor-ayuda">
            <h1 id="titulo-ayuda">Ayuda al Comprador</h1>
            <p class="mensaje-ayuda">Si tienes alguna pregunta o problema con tu pedido, por favor completa el siguiente formulario y te responderemos a la brevedad.</p>
            
            <form id="consultaForm" class="comprador-form">
                <label for="titulo">Título/Asunto:</label>
                <input type="text" id="titulo" name="titulo" required>
                
                <label for="email">Dirección de Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="mensaje">Contenido del Mensaje:</label>
                <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                
                <input type="submit" value="Enviar">
            </form>
            
            <div id="resultado"></div>
        </div>
    </div>
    `;

    return ayuda;
};


const Ayuda = createElementAyuda();
export default Ayuda;


