const QUERY_PARAMS_NOMBRE = 'nombre';
const url_vista = document.location.href;
const url = new URL(url_vista)
const nombre_de_la_serie = url.searchParams.get(QUERY_PARAMS_NOMBRE)

const nodo_texto = document.createTextNode(nombre_de_la_serie)
const nodo_h1 = document.querySelector('h1')
nodo_h1.appendChild(nodo_texto)
