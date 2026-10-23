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


const peliculas = JSON.parse(localStorage.getItem('datos_peliculas')) || [];

const nodoMain = document.querySelector('main');
nodoMain.classList.add('peliculas');

for (let pelicula of peliculas) {
    
    const nodoPelicula = document.createElement('article');
    const nodoTitulo = document.createElement('h2');
    const nodoDescripcion = document.createElement('p');
    const nodoDetalle = document.createElement('a');
    
    nodoTitulo.textContent = pelicula.titulo;
    nodoDescripcion.textContent = pelicula.descripcion;
    nodoDetalle.setAttribute('href', `detalle.html?id=${pelicula.id}`);
    nodoDetalle.textContent = 'Ver detalle';

    nodoPelicula.appendChild(nodoTitulo);
    nodoPelicula.appendChild(nodoDescripcion);
    nodoPelicula.appendChild(nodoDetalle);
    nodoMain.appendChild(nodoPelicula);

    nodoPelicula.addEventListener('click', function () {
        nodoPelicula.classList.toggle('seleccionada');
    });
}
