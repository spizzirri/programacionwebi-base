const SERIES = [
    'The Office',
    'How I meet your mother', 
    'Black Mirror', 
    'Games of Thrones', 
    'The Witcher',
    'Breaking Bad',
    'Los simuladores',
    'La niñera',
    'Casados con hijos',
    'Okupas'
]


function agregarSeries(){
    let nodo_main = document.querySelector("main")

    for(let serie of SERIES){

        let nodo_article = document.createElement("article");
        let nodo_a = document.createElement("a")
        nodo_a.href = `./vistas/serie.html?nombre=${serie}`
        //nodo_a.target = "_blank"
        let nodo_texto = document.createTextNode(`${serie}`);
        nodo_a.appendChild(nodo_texto)
        nodo_article.appendChild(nodo_a)
        nodo_main.appendChild(nodo_article)

    }

}

agregarSeries()