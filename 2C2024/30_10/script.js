const nodoForm = document.querySelector("form");
nodoForm.addEventListener('submit', validarFormulario)

function validarFormulario(evento){
    evento.preventDefault()
    const nodoError = document.querySelector("#mensaje_error");
    nodoError.innerHTML = "";
    const nodoUsuario = document.querySelector("#usuario");
    const nodoClave = document.querySelector("#clave");
    const nodoEmail = document.querySelector("#email");

    if(nodoUsuario.value.length != 3 )
        nodoError.innerHTML += "<p>El usuario debe tener 8 caracteres</p>"
    if(!validarQueElUsuarioNoExiste(nodoUsuario.value)){
        nodoError.innerHTML += "<p>El usuario ya existe</p>"
    }

    // tenga 8 caracteres, 4 sean numeros y 4 sean letras
    if(nodoClave.value.length != 3){
        nodoError.innerHTML += "<p>La clave debe tener 3 caracteres, 1 numero y 2 letras</p>"
    }else{
        if(!validarClave(nodoClave.value)){
            nodoError.innerHTML += "<p>La clave debe tener 1 numero y 2 letras</p>"
        }
    }

    /**
     * [ {...}, {...}, {...} ]
     * { usuario1: {}, usuario2: {},   }
     * 
     */
    if(!nodoError.innerHTML){
        let usuariosRegistrados = {}
        const usuariosRegistradosJSON = localStorage.getItem('usuarios');
        if(usuariosRegistradosJSON){
            usuariosRegistrados = JSON.parse(usuariosRegistradosJSON)
            usuariosRegistrados[nodoUsuario.value] = { 
                usuario: nodoUsuario.value,
                clave: nodoClave.value,
                email: nodoEmail.value
             }
        }else{
            usuariosRegistrados[nodoUsuario.value] = {
                usuario: nodoUsuario.value,
                clave: nodoClave.value,
                email: nodoEmail.value
            }
        }
        localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados))
        nodoForm.submit()
    }
        
}

function validarQueElUsuarioNoExiste(usuario){
    const usuariosJSON = localStorage.getItem('usuarios');
    if(!usuariosJSON)
        return true;
    const usuarios = JSON.parse(usuariosJSON);
    return !usuarios.hasOwnProperty(usuario)
}

function validarClave(clave){
    // Hacer una logica para que la clave tenga 4 numero y 4 letras
    return true;
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