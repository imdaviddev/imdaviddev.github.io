/** VALIDACIONES UTILES PARA LOS REGISTROS */
function validarNombre(nombre){
    if(nombre == "" || nombre.length > 15 || !validarQueSeaSoloTexto(nombre)){
        return false;
    }
    return true;
}

function validarApellido(apellido){
    if(apellido == "" || apellido.length > 15 || !validarQueSeaSoloTexto(apellido)){
        return false;
    }
    return true;
}

function validarDomicilio(domicilio){
    if(domicilio == "" || domicilio.length > 30){
        return false;
    }
    return true;
}

function validarDNI(dni){
    if(dni.length != 8 || parseInt(dni) <= 0 || !validarQueSeaSoloNumeros(dni)){
        return false;    
    }
    return true;
}

function validarFechaNacimiento(fecha) {
    var fechaActual = new Date();
    
    // Convertir la fecha de nacimiento a un objeto Date
    var partesFecha = fecha.split('-');
    var fechaNacimiento = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);

    // Establecer la hora en ambas fechas a medianoche
    fechaActual.setHours(0, 0, 0, 0);
    fechaNacimiento.setHours(0, 0, 0, 0);

    return fechaNacimiento < fechaActual;
}

function validarMail(mail){
    if(mail.length == 0 || !mail.includes("@") || !mail.includes(".com")){
        return false;
    }
    return true;
}

function validarContraseña(contraseña){
    console.log(noContieneCaracteresEspecialesYMayusculas(contraseña));
    if(contraseña.length < 8 || !noContieneCaracteresEspecialesYMayusculas(contraseña)){
        return false;
    }
    return true;
}
/*checkbox de tarjeta, cuenta bancaria, mercado pago*/

function validarNumeroTarjeta(numeroTarjeta){
    if(parseInt(numeroTarjeta) < 0 || !validarQueSeaSoloNumeros(numeroTarjeta)){
        return false;
    }
    if(numeroTarjeta.length != 16){
        return false;    
    }
    return true;
}

function validarCodigoSeguridad(codigo){
    if(parseInt(codigo) < 0 || !validarQueSeaSoloNumeros(codigo)){
        return false;
    }
    let codigoParseado = codigo.toString();
    if(codigoParseado.length != 3){
        return false;
    }
    return true;
}

function validarFechaVencimiento(fecha){
    var fechaActual = new Date();
    
    // Convertir la fecha de nacimiento a un objeto Date
    var partesFecha = fecha.split('-');
    var fechaVencimiento = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);

    // Establecer la hora en ambas fechas a medianoche
    fechaActual.setHours(0, 0, 0, 0);
    fechaVencimiento.setHours(0, 0, 0, 0);

    return fechaVencimiento > fechaActual;
}

function validarCbu(cbu){
    if(parseInt(cbu) < 0 || !validarQueSeaSoloNumeros(cbu)){
        return false;
    }
    if(cbu.length != 22){
        return false;
    }
    return true;
}

function validarNumeroDeCliente(numeroCliente){
    if( numeroCliente.length <= 0 || parseInt(numeroCliente) <= 0 || !validarQueSeaSoloNumeros(numeroCliente)){
        return false;
    }
    return true;
}

function validarAlias(alias){
    if(alias.length == 0 || alias.includes(" ")){
        return false;
    }
    return true;
}

function validarCvu(cvu){
    if(parseInt(cvu) < 0 || !validarQueSeaSoloNumeros(cvu)){
        return false;
    }
    if(cvu.length != 22){
        return false;
    }
    return true;
}

// ------------------------------------------------------------------------------------------------

// CREAR PRODUCTO
function validarTitulo(titulo){
    return titulo.length > 0;
}

function validarPrecio(precio){
    return parseInt(precio) > 0 && validarQueSeaSoloNumeros(precio);
}

function validarEspecificacion(text){
    return text.length > 0;
}

function validarStock(stock){
    return parseInt(stock) >= 0 && validarQueSeaSoloNumeros(stock);
}


// Funcion auxiliar
function validarQueSeaSoloTexto(dato){
    let expresionRegularSoloLetras = /^[A-Za-zñ\s]+$/;
    return expresionRegularSoloLetras.test(dato);
}
function validarQueSeaSoloNumeros(dato){
   let expresionRegularSoloNumeros = /^[0-9]+$/;
    return expresionRegularSoloNumeros.test(dato);
}
function noContieneCaracteresEspecialesYMayusculas(texto){
    let expresionRegularTieneAlmenosUnCaraacterEspecial = /[$&+,:;=?@#|'<>.^*()%!-]/;

    const expresionRegular = /^[a-z0-9\s]*$/;
    return !expresionRegular.test(texto) && expresionRegularTieneAlmenosUnCaraacterEspecial.test(texto) && !(texto.toLowerCase() === texto);
}

export 
    {
        validarAlias, 
        validarApellido, 
        validarCbu, 
        validarContraseña, 
        validarDNI, 
        validarDomicilio, 
        validarCodigoSeguridad, 
        validarCvu, validarMail, 
        validarNombre, 
        validarNumeroDeCliente, 
        validarNumeroTarjeta,
        validarFechaNacimiento,
        validarFechaVencimiento,
        validarStock,
        validarTitulo,
        validarPrecio,
        validarEspecificacion
    }