import { mensajeConfirmacion, tipoConfimacion } from "../index.js";
import { crearProducto } from "./creacion.js";
import * as r from "./logica/validaciones.js";

/** Espero que el DOM se cargue  */
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("producto-form")?.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario de manera tradicional
    
        // Recopila los valores del formulario
        const titulo = document.getElementById("titulo").value;
        const imagenInput = document.getElementById("imagen");
        const descripcion = document.getElementById("descripcion").value;
        const precio = parseInt(document.getElementById("precio").value);
        const stock = parseInt(document.getElementById("stock").value);
    
        // Recopila las categorías seleccionadas
        const categoriasSeleccionadas = [];
        const categoriaCheckboxes = document.querySelectorAll('input[name="categoria"]:checked');
        categoriaCheckboxes.forEach(checkbox => {
            categoriasSeleccionadas.push(checkbox.value);
        });
    
        // Accede al archivo seleccionado por el usuario
        const imagenFile = imagenInput.files[0];
        const pathImg = imagenFile? URL.createObjectURL(imagenFile) : null;
    
        // Puedes hacer lo que quieras con los datos aquí, por ejemplo, mostrarlos en la consola
        console.log("Título: " + titulo);
        console.log("Imagen (nombre del archivo): " + imagenFile?.name);
        console.log("Descripción: " + descripcion);
        console.log("Precio: " + precio);
        console.log("Categorías seleccionadas: " + categoriasSeleccionadas.join(', '));
    
        // Validacion de los campos y muestra del mensaje
        if (validarCampos()) {
            mensajeConfirmacion(tipoConfimacion.exito,"Exito en el registro de datos");
            mostrarProductoCreado()
        }else {
            console.log("HOLA MI VIDA");
        }
    
  
        function mostrarProductoCreado(){
                     // Creo la card 
                     document.querySelector(".contenedor-producto-creado").classList.remove("hidden")
                     const mostrador = document.querySelector(".producto-creado")
                     mostrador.replaceChild(crearProducto(titulo, precio, pathImg, categoriasSeleccionadas, stock), mostrador.firstChild)
        }

        function validarCampos() {
            // Recopila los valores del formulario
            const titulo = document.getElementById("titulo").value;
            const imagenInput = document.getElementById("imagen");
            const descripcion = document.getElementById("descripcion").value;
            const precio = parseInt(document.getElementById("precio").value);
            const stock = parseInt(document.getElementById("stock").value);
        
            switch (false) {
                case r.validarTitulo(titulo):
                  error("El titulo debe ser una cadena de texto no vacia");
                  return false;
                case r.validarPrecio(precio):
                  error("El precio debe ser un numero positivo");
                  return false;
                case r.validarStock(stock):
                  error("El stock tiene que ser un numero positivo");
                  return false;
                case r.validarEspecificacion(descripcion):
                  error("La especificacion tecnica debe ser una cadena de texto no vacia");
                  return false;
                case imagenFile? true : false:
                  error("Ingrese una imagen");
                  return false;
                case categoriasSeleccionadas.length != 0:
                  error("Seleccione una categoria");
                  return false
                default:
                  return true;
              }
        }


    });

    function error(mensaje) {
        mensajeConfirmacion(tipoConfimacion.error, "Error: " + mensaje);
    }

})