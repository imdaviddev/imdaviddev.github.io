import * as r from "./logica/validaciones.js";
import { mensajeConfirmacion, tipoConfimacion } from "../index.js";

// Eventos de el registo
document.addEventListener("DOMContentLoaded", function () {
  // VARIABLES DEL FORMULARIO
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let dni = document.getElementById("dni");
  let fechaNacimiento = document.getElementById("fechaNacimiento");
  let email = document.getElementById("email");
  let domicilio = document.getElementById("domicilio");
  let contrasenia = document.getElementById("password");

  // Mercado pago
  let alias = document.getElementById("alias");
  let cvu = document.getElementById("cvu");

  // Tarjeta
  let numeroTarjeta = document.getElementById("numeroTarjeta");
  let codigoSeguridad = document.getElementById("codigoSeguridad");
  let fechaVencimiento = document.getElementById("fechaVencimiento");

  // Cuenta bancaria
  let cbu = document.getElementById("cbu");
  let numeroCliente = document.getElementById("numeroCliente");

  // EVENTOS DEL FORMULARIO

  // ELEGIR TIPO DE PAGO
  // CARGAR DATOS SEGUN EL TIPO DE PAGO

  const formulario = document.getElementById("formulario");
  const medioPago = document.getElementById("medioPago");
  const datosMercadoPago = document.getElementById("datosMercadoPago");
  const datosTarjeta = document.getElementById("datosTarjeta");
  const datosCuentaBancaria = document.getElementById("datosCuentaBancaria");

  // CAMVIO DE TIPO DE PAGO BOX
  medioPago.addEventListener("change", function () {
    ocultarCampos();

    if (medioPago.value === "mercadoPago") {
      datosMercadoPago.classList.remove("hidden");
    } else if (medioPago.value === "tarjeta") {
      datosTarjeta.classList.remove("hidden");
    } else if (medioPago.value === "cuentaBancaria") {
      datosCuentaBancaria.classList.remove("hidden");
    }

    function ocultarCampos() {
      datosMercadoPago.classList.add("hidden");
      datosTarjeta.classList.add("hidden");
      datosCuentaBancaria.classList.add("hidden");
    }
  });

  // ENVIO DE DATOS FORMULARIO
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // ---- LOGICA DE VALIDACIONES ---
    // MENSAJE FINAL DE CARGADO DE DATOS
    if (validarCamposPersonales() && validarMedioDePago()) {
      mensajeConfirmacion(
        tipoConfimacion.exito,
        "Exito en el registro de datos"
      );
    }

    function validarMedioDePago() {
      // Obtener los valores de los campos según el medio de pago seleccionado
      const selectedMedioPago = medioPago.value;
      // VALIDACIONES DE MEDIOS DE PAGO
      switch (selectedMedioPago) {
        case "mercadoPago":
          return validarMercadoPago();
        case "tarjeta":
          return validarTarjeta();
        case "cuentaBancaria":
          return validarCuentaBancaria();
        default:
          error("Debe cargar un medio de pago!");
          return false;
      }
    }
  
    function validarCamposPersonales() {
      switch (true) {
        case !r.validarNombre(nombre.value):
          error("El nombre debe tener entre 1 y 15 caracteres");
          return false;
        case !r.validarApellido(apellido.value):
          error("El apellido debe tener entre 1 y 15 caracteres");
          return false;
        case !r.validarDNI(dni.value):
          error("El DNI debe ser un número de 8 dígitos positivo");
          return false;
        case !r.validarFechaNacimiento(fechaNacimiento.value):
          let diaActual = obtenerFechaActual();
          error(
            `La fecha de nacimiento debe ser menor al día actual: ${diaActual}`
          );
          return false;
        case !r.validarMail(email.value):
          error("El email tiene que ser una expresión de email válida");
          return false;
        case !r.validarDomicilio(domicilio.value):
          error("El domicilio debe tener entre 1 y 30 caracteres");
          return false;
        case !r.validarContraseña(contrasenia.value):
          error(
            "La contraseña debe tener mínimo 8 caracteres con una mayúscula y un carácter especial"
          );
          return false;
        default:
          return true;
      }
    }
  
    function validarMercadoPago() {
      switch (true) {
        case !r.validarAlias(alias.value):
          error(
            "El alias debe ser una cadena de texto sin espacios de más de un caracter"
          );
          return false;
        case !r.validarCvu(cvu.value):
          error("El cvu debe ser un número positivo de 22 dígitos");
          return false;
        default:
          return true;
      }
    }
  
    function validarTarjeta() {
      switch (true) {
        case !r.validarNumeroTarjeta(numeroTarjeta.value):
          error("El numero de tarjeta debe ser un numero positivo de 16 digitos");
          return false;
        case !r.validarCodigoSeguridad(codigoSeguridad.value):
          error(
            "El codigo de seguridad debe ser un numero positivo de 3 digitos"
          );
          return false;
        case !r.validarFechaVencimiento(fechaVencimiento.value):
          let fechaActual = obtenerFechaActual();
          error(
            `La fecha de vencimiento debe ser mayor a la fecha actual: ${fechaActual}`
          );
          return false;
        default:
          return true;
      }
    }
  
    function validarCuentaBancaria() {
      switch (true) {
        case !r.validarCbu(cbu.value):
          error("El cbu debe ser un numero positivo de 22 digitos");
          return false;
        case !r.validarNumeroDeCliente(numeroCliente.value):
          error("El numero de cliente debe ser 1 o mayor");
          return false;
        default:
          return true;
      }
    }
  
    function obtenerFechaActual(){
      let diaActual = Date.now();
      let fechaActual = new Date(diaActual);

      let año = fechaActual.getFullYear();
      let mes = ('0' + (fechaActual.getMonth() + 1)).slice(-2); 
      let dia = ('0' + fechaActual.getDate()).slice(-2);

      // Formatear la fecha como "YYYY-MM-DD"
      let fechaFormateada = `${año}-${mes}-${dia}`;
      return fechaFormateada;
    }

    function error(mensaje) {
      mensajeConfirmacion(tipoConfimacion.error, "Error: " + mensaje);
    }

    
  });


});
