const botones = document.querySelectorAll('button');
const resultado = document.querySelector('p');
const VALIDACION = 'Validacion: ';

function limpiarEstado(){
    operacion = '';
    numero2 = '';
    operador = '';
    resultado.textContent = `${VALIDACION}`;
}

function actualizarValidacion(operacion){
    const VALIDACION = 'Validacion: ';
    resultado.textContent = `${VALIDACION} ${operacion}`;
}

let operacion = '';
let cantidadDeClick = 0;
let numero1 = '';
let numero2 = '';
let operador = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {

        cantidadDeClick++;
        if(cantidadDeClick == 1) numero1 = boton.textContent;
        if(cantidadDeClick == 2) operador = boton.textContent;
        if(cantidadDeClick == 3) numero2 = boton.textContent;
        if(cantidadDeClick == 4) {
            cantidadDeClick = 1;
            limpiarEstado();
            numero1 = boton.textContent;
         }

        operacion += boton.textContent;
        actualizarValidacion(operacion);

        if(cantidadDeClick == 3){

            switch(operador){
                case '<':
                    actualizarValidacion(`${operacion} = ${Number(numero1) < Number(numero2)}`)
                    break;
                case '>':
                    actualizarValidacion(`${operacion} = ${Number(numero1) > Number(numero2)}`)
                    break;
                case '=':
                    actualizarValidacion(`${operacion} = ${Number(numero1) === Number(numero2)}`)
                    break;
                case '!=':
                    actualizarValidacion(`${operacion} = ${Number(numero1) !== Number(numero2)}`)
                    break;
            }
        }
    });
});