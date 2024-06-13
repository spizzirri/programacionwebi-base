const QUERY_PARAMS_NOMBRE = 'indice';
const url_vista = document.location.href;
const url = new URL(url_vista)
const indice_de_la_serie = url.searchParams.get(QUERY_PARAMS_NOMBRE)

const SERIES = JSON.parse(localStorage.getItem('series'))

const serie = new Serie(SERIES[indice_de_la_serie])

const nodo_texto_h1 = document.createTextNode(serie.nombre)
const nodo_h1 = document.querySelector('h1')
nodo_h1.appendChild(nodo_texto_h1)


const nodo_texto_p = document.createTextNode(serie.sinopsis)
const nodo_p = document.querySelector('p')
nodo_p.appendChild(nodo_texto_p)
