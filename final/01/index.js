import { Validador } from './Validador.js';
import { pasarArregloATexto } from './funciones.js';

const botones = document.querySelectorAll('button');
const resultado = document.querySelector('p');

const validador = new Validador(resultado);

let cantidadDeClick = 0;
const resultadoAlmacenadoJSON = localStorage.getItem('resultado');
let resultadoAlmacenado = [];

if(resultadoAlmacenadoJSON) {
    resultadoAlmacenado = JSON.parse(resultadoAlmacenadoJSON);
}


botones.forEach(boton => {
    boton.addEventListener('click', () => {

        cantidadDeClick++;
        validador.agregarElemento(boton.textContent);
        if(cantidadDeClick == 4) {
            cantidadDeClick = 1;
            validador.limpiarEstado();
            validador.agregarElemento(boton.textContent);
         }

        validador.actualizarValidacion(pasarArregloATexto(validador.operacion));

        if(cantidadDeClick == 3){
            const resultadoDeLaOperacion = validador.calcularOperacion();
            validador.actualizarValidacion(resultadoDeLaOperacion);

            resultadoAlmacenado.push(resultadoDeLaOperacion);
            localStorage.setItem('resultado', JSON.stringify(resultadoAlmacenado));
        }
    });
});