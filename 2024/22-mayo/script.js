const carrito = {
    items: [],
    total: 0
}


function sumarItem(evento){
    const nodo_producto = document.querySelector("#producto")
    const nodo_precio = document.querySelector("#precio")

    nuevo_item = {
        'nombre': nodo_producto.value,
        'precio': parseFloat(nodo_precio.value)
    }

    carrito['items'].push(nuevo_item)
    carrito['total'] += nuevo_item['precio']
    nodo_producto.value = ''
    nodo_precio.value = ''

    const nodo_cantidad = document.querySelector("#cantidad_items")
    nodo_cantidad.textContent = "Cantidad: " + carrito['items'].length

    const nodo_detalle = document.querySelector("#detalle_items");

    nodo_detalle.innerHTML = ''
    for(let item of carrito['items']){
        nodo_detalle.innerHTML = nodo_detalle.innerHTML + `<li>${item['nombre']}: $${item['precio']}</li>`
    }

    const nodo_total = document.querySelector("#total");
    nodo_total.textContent = `Monto total: $${carrito['total']}`

}

const btn_agregar = document.querySelector("#btn_agregar");
btn_agregar.addEventListener('click', sumarItem);
//btn_agregar.addEventListener('click', (evento)=>{});
//btn_agregar.addEventListener('click', function(e){});