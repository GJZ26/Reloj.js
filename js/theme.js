// Obtener el elemento del Checkbox para cambiar el tema
const boton = document.getElementById('modo');

// Obtener todos los elementos de la página
const timeTheme = document.getElementById('time');
const dateTheme = document.getElementById('date');
const horaTheme = document.getElementById('hora');
const minutoTheme = document.getElementById('minuto');
const segundoTheme = document.getElementById('segundo');
const relojTheme = document.getElementById('reloj');
const bodyTheme = document.body;

function toTheme(){
    if (boton.checked){
        // Agregar la clase Dark a los elementos
        timeTheme.classList.add('dark');
        dateTheme.classList.add('dark');
        horaTheme.classList.add('dark');
        minutoTheme.classList.add('dark');
        segundoTheme.classList.add('dark');
        relojTheme.classList.add('dark');
        bodyTheme.classList.add('dark');
    }else{
        // Eliminar la clase Dark a los elementos
        timeTheme.classList.remove('dark');
        dateTheme.classList.remove('dark');
        horaTheme.classList.remove('dark');
        minutoTheme.classList.remove('dark');
        segundoTheme.classList.remove('dark');
        relojTheme.classList.remove('dark');
        bodyTheme.classList.remove('dark');
    }
}

boton.addEventListener('click',toTheme);