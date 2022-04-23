// Constante para los elementos del reloj
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

let meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

// Constante para los elementos de texto
const time = document.getElementById('time');
const date = document.getElementById('date');

// Actualiza todos los elementos de la pagina
function initClock(){
    const tm = new Date();

    // Actualización de las manecillas
    hora.style.transform='rotate('+30*tm.getHours()+'deg)';
    minuto.style.transform='rotate('+6*tm.getMinutes()+'deg)';
    segundo.style.transform='rotate('+6*tm.getSeconds()+'deg)';

    // Atualización de texto
    time.textContent=("0"+tm.getHours()).slice(-2)+":"+("0"+tm.getMinutes()).slice(-2)+":"+("0"+tm.getSeconds()).slice(-2);
    date.textContent=("0"+tm.getDate()).slice(-2)+" de "+meses[tm.getMonth()]+" del "+tm.getFullYear();

}

console.log("Versión 1.0.1\nDescargue el repositorio aquí: https://github.com/GJZ26/Reloj.js");
// Hacemos que se repita la función cada segundo
setInterval('initClock()',1000)
initClock();
