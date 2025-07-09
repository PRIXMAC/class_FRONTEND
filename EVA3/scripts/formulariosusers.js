$(document).ready(function() {

    $('#boton_enviar').on('click', validarFormulario);
    $('#cancelar').on('click', function () {
        $('#FormularioUsers')[0].reset();
        limpiarEstilos();
    });
    $('#inputNombre').on('change', validarNombre);
    $('#inputUsuario').on('change', validarUsuario);
    $('#inputNombre').on('change', validarFecha);
    $('#inputUsuario').on('change', validarEmail);

});

function validarFormulario() {
    let valido = true;

    if (!validarNombre()) valido = false;
    if (!validarUsuario()) valido = false;
    if (!validarFecha()) valido = false;
    if (!validarEmail()) valido = false;

    if (valido) {
        alert(" Formulario válido. ¡Datos enviados!");
        $('#FormularioUsers')[0].reset();
        limpiarEstilos();
    }
    }


function validarNombre() {
    if ($('#inputNombre').val().trim() === "") {
        $('#inputNombre').addClass('is-invalid');
            return false;
    } else {
        $('#inputNombre').removeClass('is-invalid');
            return true;  
    } 
    
}

function validarUsuario() {
    if ($('#inputUsuario').val().trim() === "") {
        $('#inputUsuario').addClass('is-invalid');
        return false;
    } else {
        $('#inputUsuario').removeClass('is-invalid');
        return true;
    }
}

function validarFecha() {
    if ($('#inputFecha').val().trim() === "") {
        $('#inputFecha').addClass('is-invalid');
        return false;
    } else {
        $('#inputFecha').removeClass('is-invalid');
        return true;
    }
}

function validarEmail() {
    var valor = $('#inputEmail').val().trim();
    var patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (valor === "" || !patron.test(valor)) {
        $('#inputEmail').addClass('is-invalid');
        return false;
    } else {
        $('#inputEmail').removeClass('is-invalid');
        return true;
    }
}


function limpiarEstilos() {
    $('#FormularioUsers .is-invalid').removeClass('is-invalid');
}
