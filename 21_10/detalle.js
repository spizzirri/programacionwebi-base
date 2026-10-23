const url = new URL(window.location.href);
const id = url.searchParams.get('id');

const peliculas = JSON.parse(localStorage.getItem('datos_peliculas')) || [];

const pelicula = peliculas.find(function (pelicula) {
    return pelicula.id == id;
});

const nodoMain = document.querySelector('main');
const nodoTitulo = document.createElement('h2');
const nodoDescripcion = document.createElement('p');
const nodoActores = document.createElement('ul');

nodoTitulo.textContent = pelicula.titulo;
nodoDescripcion.textContent = pelicula.descripcion;

for (let actor of pelicula.actores) {
    const nodoActor = document.createElement('li');
    nodoActor.textContent = actor;
    nodoActores.appendChild(nodoActor);
}

nodoMain.appendChild(nodoTitulo);
nodoMain.appendChild(nodoDescripcion);
nodoMain.appendChild(nodoActores);