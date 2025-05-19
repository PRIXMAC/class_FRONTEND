//alert("script enlazado en archivo externo...")
console.log("script enlacado en archivo externo cargado en consola...")

//comentario de multiple linea.

/*
comentario 
multiple 
linea
*/

//tipos de datos (javascript es sensible en cambio de texto)

var texto_1 = 'Texto entre comillas simples "';
var texto_2 = " Texto entre comillas simples ' ";
var numero = 49;
var booleana = true;
const pi = 3.14;

console.log(texto_1);
console.log(texto_2);
console.log(numero);
console.log(booleana);
console.log(pi);

console.log("")
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log("")
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// permite crear listas para que se pueda recorrer

var nombres = ['Erick', 'Aguiles', 'Baeza']
nombres.forEach(//<- se recorre la lista con eso el forEach, es similar con como el for de python.
    function (nombre) {
        mensaje(nombre); //en el mensaje nos da una funcion donde nos muesta el "nombre" en la consola.
    }
);

for (i = 0; i < 10; i++) { //<- asi se definen los for en javascript mas acabada, pero se debe definir donde inicia y hasta donde llega.
    console.log(i) //si quieres sumar mas en jacascript puedes colocarle ++ o si quieres restarle puedes colocar --
};

//permite crear funciones

function mensaje(nombre) {
    console.log("Buen día " + nombre)
};

var funcion_anonima = function () {
    console.log("Funcion Anónima");
};

mensaje("Erick");

/*se puede ingresar a los elementos de la pagina con get o seleccionar toda la pagina con document*/

