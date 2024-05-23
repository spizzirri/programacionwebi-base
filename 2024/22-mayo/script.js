const carrito = {
    items: [],
    total: 0
}


function obtenerTexto(selector){
    const nodo = document.querySelector(selector)
    let texto = '';
    if(nodo.nodeName == "INPUT"){
        texto = nodo.value;
        nodo.value = '';
    }else{
        texto = nodo.textContent
        nodo.textContent= ''
    }
    return texto;
}

function modificarTexto(selector, texto){
    const nodo = document.querySelector(selector)
    if(nodo.nodeName == "INPUT"){
        nodo.value = texto
    }else{
        nodo.textContent = texto
    }
}

function generarListaDeItems(selector, lista_de_items){
    const nodo_detalle = document.querySelector(selector);

    nodo_detalle.innerHTML = ''
    for(let item of lista_de_items){
        nodo_detalle.innerHTML = nodo_detalle.innerHTML + `<li>${item['nombre']}: $${item['precio']}</li>`
    }
}


function sumarItem(evento){

    nuevo_item = {
        'nombre': obtenerTexto("#producto"),
        'precio': parseFloat(obtenerTexto("#precio"))
    }

    carrito['items'].push(nuevo_item)
    carrito['total'] += nuevo_item['precio']

    modificarTexto("#cantidad_items", `Cantidad: ${carrito['items'].length}`)

    generarListaDeItems("#detalle_items", carrito['items']);

    modificarTexto("#total", `Monto total: $${carrito['total']}`)
}

const btn_agregar = document.querySelector("#btn_agregar");
btn_agregar.addEventListener('click', sumarItem);
//btn_agregar.addEventListener('click', (evento)=>{});
//btn_agregar.addEventListener('click', function(e){});