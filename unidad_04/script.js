const nodo_regex = document.getElementById("regex")
const nodo_usuario = document.getElementById("usuario")
const nodo_contraseña = document.getElementById("contraseña")
const errores = document.getElementById("errores")

/**
 * [a-z] : Caracteres de la a - z
 * [A-Z] : Caracteres de la A - Z
 * [a-z|A-Z] : Caracteres
 * [0-9] : Numero del 0 al 9
 * ^ : Empieza con 
 * $ : Termina con
 * 
 * 
 */

nodo_usuario.addEventListener('keyup', (e)=>{

    REGEX = new RegExp(nodo_regex.value)

    esValido = REGEX.test(nodo_usuario.value)
    if(!esValido){
        errores.innerText = "Usuario invalido"
    }else{
        errores.innerText = ""
    }
})