const usuarioCorrecto = {
    email: "bocaelmasgrande@gmail.com",
    contrasenia: "bocayoteamo"
}

export function autenticacionUsuario(email, contrasenia){
    return validarMail(email), validarContrasenia(contrasenia);
}

function validarMail(email){
    // LAS DISTINTAS VALIDACIONES
    if(!email.includes("@")){
        return false;
    }else {
        return email == usuarioCorrecto.email;
    }
}
function validarContrasenia(contrasenia){
    return contrasenia == usuarioCorrecto.contrasenia;
}