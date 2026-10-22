// CAMINO 1
/*
const nombre = localStorage.getItem('nombre');

if (nombre) {
    document.querySelector('span').textContent = nombre;
} else {
    document.querySelector('h1').textContent = 'Ocurrio un error, no se encontro el nombre';
}
*/

// CAMINO 2

const url = new URL(window.location.href);
const nombre = url.searchParams.get('nombre');

if (nombre) {
    document.querySelector('span').textContent = nombre;
} else {
    document.querySelector('h1').textContent = 'Ocurrio un error, no se encontro el nombre';
}

const nodoBorrar = document.querySelector('#borrar');
nodoBorrar.addEventListener('click', function () {
    localStorage.removeItem('nombre');
    document.location.href = 'index.html';
})

const miObjeto = JSON.parse(localStorage.getItem('miObjeto'));
console.log(miObjeto);