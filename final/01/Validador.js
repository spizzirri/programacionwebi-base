import { VALIDACION } from "./constantes.js";
import { pasarArregloATexto } from "./funciones.js";

export class Validador{

    #operacion;
    #nodeResultado;

    constructor(nodeResultado){
        this.#operacion = [];
        this.#nodeResultado = nodeResultado;
    }

    get operacion(){
        return this.#operacion;
    }

    actualizarValidacion(texto){
        this.#nodeResultado.textContent = `${VALIDACION} ${texto}`;
    }

    calcularOperacion(){
            switch(this.#operacion[1]){
                case '<':
                    return `${pasarArregloATexto(this.#operacion)} = ${Number(this.#operacion[0]) < Number(this.#operacion[2])}`;
                    break;
                case '>':
                    return `${pasarArregloATexto(this.#operacion)} = ${Number(this.#operacion[0]) > Number(this.#operacion[2])}`;
                    break;
                case '=':
                    return `${pasarArregloATexto(this.#operacion)} = ${Number(this.#operacion[0]) === Number(this.#operacion[2])}`;
                    break;
                case '!=':
                    return `${pasarArregloATexto(this.#operacion)} = ${Number(this.#operacion[0]) !== Number(this.#operacion[2])}`;
                    break;
            }
    }

    agregarElemento(elemento){
        this.#operacion.push(elemento);
    }

    limpiarEstado(){
        this.#operacion = [];
        this.#nodeResultado.textContent = `${VALIDACION}`;
    }

}