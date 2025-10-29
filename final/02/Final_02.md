# FINAL 02 — Comparador Avanzado

## Enunciado

Crear una aplicación web que permita construir y evaluar comparaciones entre expresiones aritméticas simples, con interfaz clara y responsive.

1. Mostrar botones organizados en una grilla responsive (hasta 12 botones).
2. Encabezado superior: **Comparador Avanzado:** (visible en todo momento).
3. La aplicación debe estar centrada en pantalla, sin scroll horizontal; se permite scroll vertical solo en la lista de historial cuando sea necesario.
4. Debe funcionar en modo pantalla grande y en modo celular.

### Botones propuestos (12)

- Números: 1, 2, 3, 4
- Operadores aritméticos: +, -, *, /
- Operadores de comparación y control: >, <, ==, Reset
- Botón adicional fuera de la grilla: "Limpiar historial"

### Vista modo pantalla grande (ejemplo)

|<!-- -->|<!-- -->|<!-- -->|<!-- -->|
|--------|--------|--------|--------|
| 1      | 2      | 3      | 4      |
| +      | -      | *      | /      |
| >      | <      | ==     | Reset  |

### Vista modo celular (ejemplo)

|<!-- -->|<!-- -->|
|--------|--------|
| 1      | 2      |
| 3      | 4      |
| +      | -      |
| *      | /      |
| >      | <      |
| ==     | Reset  |

## Funcionamiento esperado

- Cada lado de la comparación puede ser una expresión aritmética simple formada por números y operadores (+, -, *, /). Ejemplos válidos: "1 + 2", "3 * 4", "4 / 2".
- Secuencia mínima para una comparación válida:
  1. Construir expresión izquierda (ej: 1, +, 2).
  2. Seleccionar operador de comparación (>, <, ==).
  3. Construir expresión derecha (ej: 3, *, 1).
  4. Al completar la expresión derecha la app evalúa automáticamente la comparación y muestra el resultado: "Comparador Avanzado: 1 + 2 > 3 * 1 = Verdadero" o " = Falso".

- Evaluación:
  - Respetar precedencia de operadores dentro de cada expresión (*/ antes de +-).
  - Manejar división por cero mostrando: "Error: división por cero".
  - Comparaciones con "==" deben comparar valores numéricos reales.
  - La evaluación debe ser segura: parsear y evaluar únicamente expresiones aritméticas permitidas; no ejecutar código arbitrario.

## Controles y comportamiento extra

- Reset: reinicia la secuencia actual sin tocar el historial.
- Limpiar historial: botón fuera de la grilla que borra las validaciones almacenadas en localStorage.
- Al terminar una comparación completa, la validación (o el error) se guarda en localStorage (se agrega, no se pisa) y se muestra en la lista de historial debajo de la grilla.
- Encadenado: tras completar una comparación, la siguiente interacción puede iniciar una nueva comparación; reconocer clicks continuos de forma natural (el click 4 puede ser el inicio de la siguiente comparación si aplica).
- La lista de comparaciones previas se muestra debajo de la grilla y permite scroll vertical si excede la altura visible.

## Ejemplos

Ej A:
1. 1 → "Comparador Avanzado: 1"  
2. + → "Comparador Avanzado: 1 +"  
3. 2 → "Comparador Avanzado: 1 + 2"  
4. > → "Comparador Avanzado: 1 + 2 >"  
5. 3 → "Comparador Avanzado: 1 + 2 > 3"  
6. * → "Comparador Avanzado: 1 + 2 > 3 *"  
7. 1 → automáticamente: "Comparador Avanzado: 1 + 2 > 3 * 1 = Falso" (resultado guardado)

Ej B (división por cero):
1. 4 / 0 == 0 → "Comparador Avanzado: 4 / 0 == 0 = Error: división por cero" (guardar en historial como error)

## Requerimientos mínimos

| # | Requisito |
|---|-----------|
| 1 | Permitir secuencias para construir expresiones aritméticas en ambos lados y evaluar la comparación sin errores en consola. |
| 2 | Diseño responsive para modo celular. |
| 3 | Botón Reset para reiniciar la secuencia actual. |
| 4 | Guardar cada comparación (o error) en localStorage (apendando). |
| 5 | Botón para limpiar el localStorage. |
| 6 | Permitir encadenar comparaciones: aceptar clicks continuos y reconocer el inicio de la siguiente comparación. |
| 7 | Mostrar historial de validaciones debajo de la grilla (scroll vertical permitido ahí). |
| 8 | Manejar errores aritméticos (división por cero) y mostrar mensajes claros. |
| 9 | Evaluación segura: parsear y evaluar sólo expresiones aritméticas permitidas (sin ejecutar código arbitrario). |

## Entregables

- HTML/CSS/JS funcional que implemente lo anterior, responsive y sin errores en consola.
- Implementación JS que parsea y evalúa expresiones aritméticas simples de forma segura y guarda el historial en localStorage.
- Instrucciones breves para probar: abrir index.html en navegador y comprobar construcción, evaluación, historial, Reset y Limpiar historial.