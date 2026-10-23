const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function (e) {

    e.preventDefault();

    const nodoNombre = document.querySelector('#nombre');
    const valorNombre = nodoNombre.value;

    localStorage.setItem('nombre', valorNombre + "_LS");

    e.target.submit();
});

if (!localStorage.getItem('datos_peliculas')) {
    localStorage.setItem('datos_peliculas', JSON.stringify(DATOS_PELICULAS));
}