const url = new URL(window.location.href);
const nombrePlaneta = url.searchParams.get("nombre");

document.getElementById("nombre-planeta").textContent = nombrePlaneta;

const planetas = new CargarDatos().obtenerPlanetas();
const planeta = planetas.find(planeta => planeta.nombre === nombrePlaneta);

document.querySelector("main").textContent = JSON.stringify(planeta);