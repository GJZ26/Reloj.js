// Constante para los elementos del reloj
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

// Constante para los elementos de texto
const time = document.getElementById('time');
const date = document.getElementById('date');

// Actualiza todos los elementos de la pagina
function initClock(){
    const tm = new Date();

    // Actualización de las manecillas
    hora.style.transform='rotate('+(360/12)*tm.getHours()+'deg)';
    minuto.style.transform='rotate('+(360/60)*tm.getMinutes()+'deg)';
    segundo.style.transform='rotate('+(360/60)*tm.getSeconds()+'deg)';

    // Atualización de texto
    time.textContent=("0"+tm.getHours()).slice(-2)+":"+("0"+tm.getMinutes()).slice(-2)+":"+("0"+tm.getSeconds()).slice(-2);
    date.textContent=("0"+tm.getDate()).slice(-2)+" de "+monthToString(tm.getMonth())+" del "+tm.getFullYear();

}

// Función para cambiar el tm.getMonth a letra
function monthToString(mes){
    switch(mes){
        case 0: return "Enero"; break;
        case 1: return "Febrero"; break;
        case 2: return "Marzo"; break;
        case 3: return "Abril"; break;
        case 4: return "Mayo"; break;
        case 5: return "Junio"; break;
        case 6: return "Julio"; break;
        case 7: return "Agosto"; break;
        case 8: return "Septiembre"; break;
        case 9: return "Octubre"; break;
        case 10: return "Noviembre"; break;
        case 11: return "Diciembre"; break;
    }
}

// Hacemos que se repita la función cada segundo
setInterval('initClock()',1000)
initClock();