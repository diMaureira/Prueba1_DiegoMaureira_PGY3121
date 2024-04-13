function validar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    let mensaje = '';

    if (nombre == '') {
        mensaje += 'Ingrese nombre \n';
    }

    if (apellido == '') {
        mensaje += 'Ingrese apellido \n';
    }

    if (email == '') {
        mensaje += 'Ingrese Email \n';
    }
    if (telefono == '') {
        mensaje += 'Ingrese telefono \n';
    }

    if (mensaje.length > 0) {
        alert(mensaje);
        return false; // Evitar que el formulario se envíe si hay campos vacíos
    }

    return true; // Permitir el envío del formulario si todos los campos están completos
}

document.getElementById('validar').addEventListener('click', validar);