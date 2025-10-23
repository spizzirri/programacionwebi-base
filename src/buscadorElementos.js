export class BuscadorElementos {
    constructor() {}

    buscarElemento(cssSelector){
        return document.querySelector(cssSelector);
    }

    obtenerValorDelElemento(cssSelector){
        return this.buscarElemento(cssSelector).value;
    }
}