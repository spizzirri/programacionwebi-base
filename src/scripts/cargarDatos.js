class CargarDatos {

    obtenerPlanetas(){
        let planetas = [];
        const planetasJSON = localStorage.getItem("planetas");
        if(!planetasJSON){
            localStorage.setItem("planetas", JSON.stringify(DATA_PLANETAS));
            planetas = DATA_PLANETAS;
        }else{
            planetas = JSON.parse(planetasJSON);
        }
        return planetas;
    }
}