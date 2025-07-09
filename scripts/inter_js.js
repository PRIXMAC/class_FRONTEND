window.onload = function (){
    var boton_inicio = document.getElementById("boton_enviar");
    boton_inicio.addEventListener('click', validar_formulario);

    var cancelar = document.getElementById("cancelar");
    cancelar.addEventListener('click', function() {
        document.getElementById("miFormulario").reset();
        limpiarEstilos()}); 
}

function validar_formulario(){
    var inputNombre = document.getElementById('inputNombre');
    var inputRut = document.getElementById('inputRut');
    var inputFecha = document.getElementById('inputFecha');
    var inputContrasena = document.getElementById('inputContrasena');
    var inputRepetirContrasena = document.getElementById('inputRepetirContrasena');
    var inputEmail = document.getElementById('inputEmail');
    var valido = true;


    if (inputNombre.value.trim() == ""){
        inputNombre.classList.add('is-invalid');
        valido = false;
    }else {
        inputNombre.classList.remove('is-invalid');
    } 

    if (inputRut.value.trim()== "" || !validarRut(inputRut.value.trim())){
        inputRut.classList.add('is-invalid');
        valido = false;
    }else {
        inputRut.classList.remove('is-invalid');
    }

    if(inputFecha.value == ""){
        inputFecha.classList.add('is-invalid');
        valido = false;
    }else{
        inputFecha.classList.remove('is-invalid');
    }
    
    if(inputEmail.value.trim() == "" || !validar_email(inputEmail.value.trim())){
        inputEmail.classList.add('is-invalid');
        valido = false;
    }else{
        inputEmail.classList.remove('is-invalid');
    }

    if(inputContrasena.value.trim() == "" || !validar_seguridad_contrasena(inputContrasena.value.trim())){
        inputContrasena.classList.add('is-invalid');
        valido = false;
    }else{
        inputContrasena.classList.remove('is-invalid');
    }

    if(inputRepetirContrasena.value.trim() == "" || inputContrasena.value.trim() != inputRepetirContrasena.value.trim()){
        inputRepetirContrasena.classList.add('is-invalid');
        valido = false;
    }else{
        inputRepetirContrasena.classList.remove('is-invalid');
    }

    if (valido) {
        alert(" Los datos fueron enviados correctamente. ¡Gracias!");
        document.getElementById("miFormulario").reset(); limpiarEstilos();
    }
}

function validar_email(email) {
    return/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/.test(email)
}

function validarRut(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (dv(rut) == digv );
}

function dv(dig_ver) {
    var M=0,S=1;
		for(;dig_ver;dig_ver=Math.floor(dig_ver/10))
			S=(S+dig_ver%10*(9-M++%6))%11;
		return S?S-1:'k';
}

function validar_seguridad_contrasena(contrasena) {
    return/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,12}$/.test(contrasena)
}

function limpiarEstilos() {
    var campos = ['inputNombre', 'inputRut', 'inputFecha', 'inputContrasena', 'inputRepetirContrasena', 'inputEmail'];
    campos.forEach(function(id){
        document.getElementById(id).classList.remove('is-invalid');
    });
}
