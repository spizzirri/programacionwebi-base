# FINAL

## Enunciado

1. Generar una aplicacion que muestra 8 botones y permita realizar comparaciones de numeros.
2. Los botones se deben mostrar en formato de grilla como se ve mas abajo
3. En la parte superior de la grilla debe aparecer el texto ***Validacion: ***
3. La aplicacion, en todo momento, debe estar centrada y no debe tener scroll horizontal ni vertical

### Vista modo pantalla grande

|<!-- -->|<!-- -->|<!-- -->|<!-- -->|
|--------|--------|--------|--------|
| 1      | 2      | 3      | 4      |
| >      | <      | =      | !=     |

### Vista modo celular

|<!-- -->|<!-- -->|
|--------|--------|
| 1      | 2      |
| 3      | 4      |
| >      | <      |
| =      | !=     |


## Ejemplos de Funcionamiento

Ej 1:

1. Al dar click en el boton '1' --> Se muestra el texto: "Validacion: 1 "
2. Al dar click en el boton '>' --> Se muestra el texto: "Validacion: 1 >"
3. Al dar click en el boton '2'  --> Se muestra el texto: "Validacion: 1 > 2 = Falso

> Notar que el '=Falso' aparece automaticamente luegar de dar el tercer click

Ej 2:

1. Al dar click en el boton '1' --> Se muestra el texto: "Validacion: 1 "
2. Al dar click en el boton '=' --> Se muestra el texto: "Validacion: 1 ="
3. Al dar click en el boton '1'  --> Se muestra el texto: "Validacion: 1 = 1 = Verdadero

> Notar que el '=Verdadero' aparece automaticamente luegar de dar el tercer click

| NOTA   |REQUERIMIENTOS MINIMOS|
|--------|----------------------|
| 4      | Debe permitir al menos una secuencia de tres click para hacer una comparacion y que de el resultado correcto. No debe tener errores la consola.       |
| 5      | Idem 4. Debe cambiar el diseño para modo celular.      |
| 6      | Idem 5. Debe agregar un boton para reiniciar los clicks y empezar otra vez      |
| 7      | Idem 6. Debe guardar en el localstorage las comparaciones que se van haciendo (no pisar, ir agregando).  |
| 8      | Idem 7. Debe tener un boton para limpiar el localstorage si uno quiere |
| 9      | Idem 8. Debe hacer otra comparacion luego de terminar la primera. (TIP: Reconocer el click 4 para que sea el click 1 de la segunda comparacion)           |
| 10     | Idem 9. Debe ir mostrando,  debajo de la grilla, todas las validaciones que se hicieron una debajo de la otra (En este caso se permite scroll vertical)    |
