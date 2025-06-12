class VistaIndex{

    generarGrilla(elementos) {
        const nodoRaiz = document.querySelector("main");
        for(let elemento of elementos) {
            const nodoPlaneta = document.createElement("div");
            nodoPlaneta.innerHTML = `
                <img src="${elemento.imagen}" class="planeta" alt="${elemento.nombre}">
                <h3>${elemento.nombre}</h3>
                <a href="./vistas/planeta.html?nombre=${elemento.nombre}" target="_blank">Ver más</a>
            `;
            nodoRaiz.appendChild(nodoPlaneta);
        }
    }
}