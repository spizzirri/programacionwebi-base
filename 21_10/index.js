const formulario = document.querySelector('#formulario');

/*
const estaLogueado = localStorage.getItem('nombre');

if (estaLogueado) {
    document.querySelector('span').textContent = estaLogueado;
    document.querySelector('form').style.display = 'none';
} else {
    document.querySelector('#borrar').style.display = 'none';
}
*/

formulario.addEventListener('submit', function (e) {

    e.preventDefault();

    const nodoNombre = document.querySelector('#nombre');
    const valorNombre = nodoNombre.value;

    localStorage.setItem('nombre', valorNombre + "_LS");

    e.target.submit();
});

const aa = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
}

localStorage.setItem('miObjeto', JSON.stringify(aa));