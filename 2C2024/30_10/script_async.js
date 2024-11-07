
const nodoBtnEmpezar = document.querySelector("#btn_empezar");
const nodoBtn1 = document.querySelector("#btn_1");
const nodoBtn2 = document.querySelector("#btn_2");
const nodoBtn3 = document.querySelector("#btn_3");
const nodoPNumeros = document.querySelector("#numeros");

let numerosSeleccionados = [1, 3, 3]
let numerosClickeados = [];

nodoBtn1.setAttribute("disabled", "true");
nodoBtn2.setAttribute("disabled", "true");
nodoBtn3.setAttribute("disabled", "true");

nodoBtnEmpezar.addEventListener("click", (e)=>{
    nodoBtnEmpezar.setAttribute("disabled", "true");
    nodoPNumeros.innerHTML = JSON.stringify(numerosSeleccionados);

    setTimeout(()=>{
        nodoPNumeros.innerHTML = "";
        nodoBtnEmpezar.removeAttribute("disabled");
        nodoBtn1.removeAttribute("disabled");
        nodoBtn2.removeAttribute("disabled");
        nodoBtn3.removeAttribute("disabled");
    }, 1000)
})

nodoBtn1.addEventListener('click', (e)=>{
    if(numerosSeleccionados[numerosClickeados.length] == 1){
        console.log("Bien");
        numerosClickeados[numerosClickeados.length] = 1
        if(numerosClickeados.length == numerosSeleccionados.length){
            console.log("Ganaste")
            nodoBtn1.setAttribute("disabled", "true");
            nodoBtn2.setAttribute("disabled", "true");
            nodoBtn3.setAttribute("disabled", "true");
        }
    }
    else 
        console.log("Error");
})

nodoBtn2.addEventListener('click', (e)=>{
    if(numerosSeleccionados[numerosClickeados.length] == 2){
        console.log("Bien");
        numerosClickeados[numerosClickeados.length] = 2
        if(numerosClickeados.length == numerosSeleccionados.length){
            console.log("Ganaste")
            nodoBtn1.setAttribute("disabled", "true");
            nodoBtn2.setAttribute("disabled", "true");
            nodoBtn3.setAttribute("disabled", "true");
        }
    }
    else 
        console.log("Error");
})

nodoBtn3.addEventListener('click', (e)=>{
    if(numerosSeleccionados[numerosClickeados.length] == 3){
        console.log("Bien");
        numerosClickeados[numerosClickeados.length] = 3
        if(numerosClickeados.length == numerosSeleccionados.length){
            console.log("Ganaste")
            nodoBtn1.setAttribute("disabled", "true");
            nodoBtn2.setAttribute("disabled", "true");
            nodoBtn3.setAttribute("disabled", "true");
        }
    }
    else 
        console.log("Error");
})