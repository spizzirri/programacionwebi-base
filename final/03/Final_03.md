# FINAL 03 — Generador de Frases Motivacionales (verbos en infinitivo y conjugación)

## Enunciado

Crear una aplicación web interactiva y responsive que construya frases motivacionales a partir de tres partes (sujeto, verbo en infinitivo y predicado). La app debe permitir seleccionar las tres partes mediante botones en una grilla; al completar la secuencia la aplicación muestra la frase con el verbo conjugado correctamente según la persona del sujeto, valida el orden de los componentes (sujeto → verbo → predicado) y guarda la frase en un historial.

1. Mostrar botones organizados en una grilla responsive (mínimo 8 botones, hasta 12).
2. Encabezado superior: **Generador de Frases Motivacionales:** (visible siempre).
3. La aplicación debe estar centrada en pantalla, sin scroll horizontal; se permite scroll vertical solo en la lista de historial cuando haga falta.
4. Debe funcionar en modo pantalla grande y en modo celular (responsive).
5. Los verbos que aparecen en la grilla deberán mostrarse en infinitivo (p. ej. "lograr", "vencer", "aprender", "crear"). La aplicación debe encargarse de conjugar el infinitivo en tiempo presente según el sujeto seleccionado.

### Botones propuestos (ejemplo: 12)

- Sujetos: Yo, Tú, Nosotros, Ellos  
- Verbos (infinitivo): lograr, vencer, aprender, crear  
- Predicados (objetos/directos compatibles con cualquier verbo de la lista): tus metas, un nuevo hábito, nuevas habilidades, tu proyecto, un objetivo ambicioso, tu mejor versión, cada logro diario, retos concretos  
- Controles: Reset (dentro de la grilla)  
- Botón adicional fuera de la grilla: "Limpiar historial"

### Vista modo pantalla grande (ejemplo)

|<!-- -->|<!-- -->|<!-- -->|<!-- -->|
|--------|--------|--------|--------|
| Yo     | Tú     | Nosotros | Ellos |
| lograr | vencer | aprender | crear |
| tus metas | un nuevo hábito | nuevas habilidades | tu proyecto |
| Reset  | un objetivo ambicioso | tu mejor versión | retos concretos |

### Vista modo celular (ejemplo)

|<!-- -->|<!-- -->|
|--------|--------|
| Yo     | Tú     |
| Nosotros| Ellos |
| lograr  | vencer |
| aprender| crear |
| tus metas | un nuevo hábito |
| nuevas habilidades | tu proyecto |
| Reset  | (vacío)  |

## Funcionamiento esperado

- Secuencia mínima para producir una frase:
  1. Seleccionar sujeto (ej: "Yo").
  2. Seleccionar verbo (infinitivo) (ej: "lograr").
  3. Seleccionar predicado (ej: "tus metas").
  4. Al completar el tercer click la app:
     - valida que los clicks se hayan hecho en el orden correcto: sujeto → verbo → predicado. Si no, muestra mensaje breve y no guarda.
     - conjugue el verbo en presente según el sujeto (ej: "Yo logro", "Tú logras", "Nosotros logramos", "Ellos logran").
     - muestre la frase completa y la guarde en el historial con timestamp.

- Observación sobre diseño de predicados:
  - Los predicados propuestos son sintagmas nominales u objetos directos ("tus metas", "nuevas habilidades", "tu proyecto", etc.) para garantizar compatibilidad con cualquiera de los verbos de la grilla. Así la frase resultante tiene sentido con cualquier verbo conjugado: por ejemplo "Yo logro tus metas", "Tú aprendes nuevas habilidades", "Ellos crean un proyecto", "Nosotros vencemos retos concretos".
  - No se incluyen predicados que requieran una estructura verbal adicional (infinitivos después de verbos modales), con el fin de mantener la lógica simple y uniforme.

- Validaciones y reglas:
  - Validar estricto orden de selección: si el usuario selecciona verbo antes que sujeto o predicado antes del verbo, la app debe indicar el error con un mensaje en pantalla, marcar el botón seleccionado de rojo y permitir reiniciar o corregir.
  - Reset: reinicia la secuencia actual sin borrar el historial.
  - Limpiar historial: borra todas las frases guardadas en localStorage.
  - Encadenado: tras completar y guardar una frase, la siguiente interacción puede iniciar una nueva frase (aceptar clicks continuos).

- Historial:
  - Cada frase finalizada se guarda en localStorage (apendando) y se muestra debajo de la grilla en forma de lista con timestamp.
  - No guardar frases incompletas ni frases con orden inválido.

## Ejemplos

Ej A:
1. Yo → "Generador de Frases Motivacionales: Yo"  
2. lograr → "Generador de Frases Motivacionales: Yo logro"  
3. tus metas → automáticamente: "Generador de Frases Motivacionales: Yo logro tus metas" (conjugado y guardado)

Ej B (orden inválido):
1. lograr → mostrar mensaje: "Seleccione primero el Sujeto" (no guardar)

## Requerimientos mínimos

| # | Requisito |
|---|-----------|
| 1 | Permitir la secuencia completa de tres clicks (sujeto, verbo en infinitivo, predicado) y generar la frase conjugada sin errores en consola. |
| 2 | Diseño responsive para modo celular (grilla adaptativa). |
| 3 | Botón Reset que reinicia la selección actual. |
| 4 | Guardar cada frase finalizada en localStorage (apendando). |
| 5 | Botón para limpiar el historial en localStorage. |
| 6 | Validar orden de componentes: sujeto → verbo → predicado; si el orden es incorrecto, mostrar mensaje y no guardar. |
| 7 | Permitir encadenar frases: aceptar clicks continuos y reconocer inicio de la siguiente frase. |
| 8 | Mostrar historial de frases debajo de la grilla (scroll vertical permitido) con timestamp. |

## Función proporcionada: conjugarPresente (función dada)

Para que la conjugación no sea un desafío del examen, se entrega la siguiente función JavaScript que recibe un verbo en infinitivo (regular o algunos irregulares básicos) y un sujeto; devuelve la forma conjugada en presente. El alumno debe usar esta función en su implementación.


## Entregables

- HTML/CSS/JS funcional, responsive y sin errores en consola.
- Implementación JS que gestione la secuencia de clicks, valide el orden sujeto→verbo→predicado, use la función conjugarPresente para obtener la forma correcta, guarde en localStorage y renderice el historial con timestamp.
- Instrucciones breves para probar: abrir index.html en navegador, seleccionar Sujeto → Verbo (infinitivo) → Predicado; comprobar generación automática, Reset y Limpiar historial.
