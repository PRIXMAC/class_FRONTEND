var boton_inicio = document.getElementById("boton_enviar");
boton_inicio.addEventListener('click', cambiarColor)

var titulo = document.getElementById("titulo");
//el eventlistener cambiara mientras usa "click" en la pagina.
titulo.addEventListener('click', function(){ 
    titulo.classList.add('alert', 'alert-danger');//classlist puede agregar o eliminar las clases.
    titulo.classList.remove(); //se puede ingresar un elemento html en la pagina mientras se esta construyendo
});

function cambiarColor(){
    var body = document.getElementById("el_body");
    body.style.backgroundColor = "red";

}