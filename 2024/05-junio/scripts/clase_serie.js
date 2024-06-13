class Serie{

    constructor(serie){
        this.serie = serie;
    }

    get nombre() {
        return this.serie['nombre']
    }

    get sinopsis(){
        return this.serie['sinopsis']
    }
}