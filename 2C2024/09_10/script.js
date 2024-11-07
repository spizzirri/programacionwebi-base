const frutasVerduras = [
    "Acelga", "Ajo", "Alcachofa", "Alga", "Almendra", "Anana", "Apio", "Arandano", 
    "Arracacha", "Berenjena", "Betabel", "Boniato", "Brocoli", "Calabacin", 
    "Calabaza", "Camote", "Caqui", "Cebolla", "Cereza", "Chayote", "Chirimoya", 
    "Ciruela", "Col", "Coliflor", "Datiles", "Durazno", "Endibia", "Eneldo", 
    "Escarola", "Esparragos", "Espinaca", "Frambuesa", "Fresa", "Granada", 
    "Guanabana", "Guayaba", "Haba", "Higo", "Jengibre", "Jitomate", "Kiwi", 
    "Lechuga", "Lentejas", "Lima", "Limon", "Litchi", "Mamey", "Mandarina", 
    "Mango", "Manzana", "Maracuya", "Melocoton", "Melon", "Membrillo", "Mora", 
    "Moras", "Nabo", "Naranja", "Nispero", "Name", "Papaya", "Parra", "Pepino", 
    "Pera", "Perejil", "Pimiento", "Pina", "Pitahaya", "Platano", "Pomelo", 
    "Quenepa", "Quinoa", "Rabano", "Remolacha", "Repollo", "Ruibarbo", "Sandia", 
    "Setas", "Tamarindo", "Tangerina", "Tomate", "Trigo", "Uva", "Vainilla", 
    "Yaca", "Yautia", "Zanahoria", "Zapallo", "Zapote", "Zuchinni"
  ];

frutasVerduras.sort();

const boton_chequear_palabra = document.getElementById("btn_chequear_palabra");
const indice_random = parseInt((Math.random() * 100)%frutasVerduras.length)
const palabra_secreta = frutasVerduras[indice_random];
console.log(palabra_secreta)
console.log(indice_random)

boton_chequear_palabra.addEventListener('click', chequear_palabra);

function chequear_palabra(event){
    console.log("Chequeando")
    const nodo_palabra_a_chequear = document.querySelector("#palabra_ingresada");
    const palabra_a_buscar = nodo_palabra_a_chequear.value;

    const indice = frutasVerduras.findIndex(elemento => elemento == palabra_a_buscar);
    if (indice == indice_random){
        console.log("Felicidades, encontraste la palabra")
    }else{
        console.log(`${palabra_a_buscar} con indice ${indice} está a ${indice - indice_random} posiciones de diferencia`)
    }
}

/* 
 -- Mejorar el mensaje al usuario indicando si la palabra está mas arriba o mas abajo en el abecedario en lugar de dar un negativo.
    Ej: 2 palabras mas abajo
        2 palabras mas arriba

 -- El mensaje al usuario debe aparecer en el HTML, en una etiqueta p que se crea directamente desde js.
 -- Los mensaje se deben acumular para que el usuario pueda verlos todos al mismo tiempo

*/









