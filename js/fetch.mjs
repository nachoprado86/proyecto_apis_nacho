
import Receta from "./recetas.mjs";

async function getData(tipo){
    let listaRecetas = [];
    try {
        let response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=7b3f1e3f&app_key=2f090959b735cced485d0f9887fccb5d&health=gluten-free&mealType=${tipo}&imageSize=SMALL
        `,{
        method: 'GET',
        headers: {
        },
          });
        let data = await response.json();
        let resultado = data.hits;
        listaRecetas = data.hits.map((element) => new Receta(element));
    }
    catch (error){
        console.error(error)
    
    }

   
    return listaRecetas;
}
let listaRecetas = await getData("Breakfast")
let cena = await getData("Dinner")

console.log(listaRecetas[0].titulo)
console.log(cena[0].titulo)
let body = document.querySelector("body");
listaRecetas.forEach(element => {
    body.appendChild(element.render());
});