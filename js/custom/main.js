/* Al estar listo el documento */
$("document").ready(function () {

    /* Caputar evento Submit */
    $("#registroEstudiante").submit(function () {
        return validarDatos();
    })
})


/* Función Validar Datos */
function validarDatos() {
    /* Preguntar si se envia formulario */
    let pregunta = confirm("¿Seguro que deseas enviar?");
    if (pregunta) { // Caso presiona Aceptar

        /* Obtener campos */
        let inputName = $("#inputName")[0].value;
        let inputEmail = $("#inputEmail")[0].value;

        /* Validar nuestro formulario */
        if (inputName.length > 50 || inputName.length < 2) {
            alert("Su nombre no es aceptado.");
            return false;
        }
        if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(inputEmail) == false) {
            alert("Su correo electrónico está mal");
            return false;
        }
        let inputPassword = document.getElementById("password").value;
        /* Referencia al valor del elemento #user */
        let inputRePassword = document.getElementById("repassword").value;

        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(inputPassword) == false) {
            document.getElementById("password").value = "";
            document.getElementById("repassword").value = "";
            alert("La contraseña NO CUMPLE con los requisitos mínimos.");
            return false;
        }

        /* Validar si las contraseñas no son iguales */
        if (inputPassword != inputRePassword) {
            /* Referencia al elemento de apoyo */
            let apoyoInputPassword = document.getElementById("apoyoInputPassword");
            /* Cambiar el atributo style */
            apoyoInputPassword.setAttribute("style", "");
            document.getElementById("repassword").value = "";
            alert("Las contraseñas no son iguales.");
            return false;
        }

        /* Mandar confirmación de envio */
        return true;

    } else { // Caso presiona Cancelar
        return false;
    }
}