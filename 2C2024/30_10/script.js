const nodoForm = document.querySelector("form");
nodoForm.addEventListener('submit', validarFormulario)

function validarFormulario(evento){
    evento.preventDefault()
    const nodoError = document.querySelector("#mensaje_error");
    nodoError.innerHTML = "";
    const nodoUsuario = document.querySelector("#usuario");
    const nodoClave = document.querySelector("#clave");

    if(nodoUsuario.value.length != 8 )
        nodoError.innerHTML += "<p>El usuario debe tener 8 caracteres</p>"

    // tenga 8 caracteres, 4 sean numeros y 4 sean letras
    if(nodoClave.value.length != 8){
        nodoError.innerHTML += "<p>La clave debe tener 8 caracteres, 4 numero y 4 letras</p>"
    }else{
        if(!validarClave(nodoClave.value)){
            nodoError.innerHTML += "<p>La clave debe tener 4 numero y 4 letras</p>"
        }
    }

    if(!nodoError.innerHTML)
        nodoForm.submit()
}

function validarClave(clave){
    // Hacer una logica para que la clave tenga 4 numero y 4 letras
    return false;    
}



///////////////////////////////////////////////////
function sumar(numero1, fn){
    const numero2 = fn(3)
    console.log(numero2);
    console.log(numero1 + numero2)
}

function potencia(numero1){
    return numero1**2
}

function multiplicar(numero1){
    return numero1*2
}

sumar(1, potencia)
sumar(2, multiplicar)