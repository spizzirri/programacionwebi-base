const JSON_SERIES = localStorage.getItem(LOCALSTORAGE_SERIES)
const SERIES = JSON.parse(JSON_SERIES)

function agregarSeries(){
    let nodo_main = document.querySelector("main")

    for(let i in SERIES){

        let nodo_article = document.createElement("article");
        let nodo_a = document.createElement("a")
        nodo_a.href = `./vistas/serie.html?indice=${i}`
        //nodo_a.target = "_blank"
        let nodo_texto = document.createTextNode(`${SERIES[i]['nombre']}`);
        nodo_a.appendChild(nodo_texto)
        nodo_article.appendChild(nodo_a)
        nodo_main.appendChild(nodo_article)

    }

}

agregarSeries()