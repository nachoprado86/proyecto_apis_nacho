import getData from "./fetch.mjs";

class FunBotones {
    constructor() {
        this.renderGeneral = getData;
    }

    addFunciones() {
        function isItSelected(){
        let desayuno = document.getElementById("desayuno");
        desayuno.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.desayuno,
                isItSelected()
            );
        });
        let comida = document.getElementById("comida");
        comida.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.comida,
                isItSelected()
            );
        });
        let cena = document.getElementById("cena");
        cena.addEventListener("click", () => {
            this.renderGeneral.filter(
                this.renderGeneral.categorias.categorias.cena,
                isItSelected()
            );
        };
      
    
        console.log("all searched")
    };


export default botones;