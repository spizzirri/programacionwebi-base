const botones = document.querySelectorAll('button');
const resultado = document.querySelector('p');

const VALIDACION = 'Validacion: '
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
            operacion = '';
            numero2 = '';
            operador = '';
            resultado.textContent = VALIDACION;
            numero1 = boton.textContent;
         }

        operacion += boton.textContent;
        resultado.textContent = `${VALIDACION} ${operacion}`;
        

        if(cantidadDeClick == 3){

            switch(operador){
                case '<':
                    resultado.textContent = `${VALIDACION} ${operacion} = ${Number(numero1) < Number(numero2)}`;
                    break;
                case '>':
                    resultado.textContent = `${VALIDACION} ${operacion} = ${Number(numero1) > Number(numero2)}`;
                    break;
                case '=':
                    resultado.textContent = `${VALIDACION} ${operacion} = ${Number(numero1) === Number(numero2)}`;
                    break;
                case '!=':
                    resultado.textContent = `${VALIDACION} ${operacion} = ${Number(numero1) !== Number(numero2)}`;
                    break;
            }
        }
    });
});