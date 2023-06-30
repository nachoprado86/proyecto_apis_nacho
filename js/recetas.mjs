class Receta {
    constructor (objetoReceta) {
        this.titulo = objetoReceta.recipe.label;
        this.calorias = objetoReceta.recipe.calories;
        this.imagen = objetoReceta.recipe.image;
        this.tipo = objetoReceta.recipe.cuisineType;
        this.ingredientes = objetoReceta.recipe.ingredients;
        this.ingredientes2 = objetoReceta.recipe.ingredientLines;
        this.tiempo = objetoReceta.recipe.totalTime;
        this.tipologia = objetoReceta.recipe.dishType;
    }
    
    
    render() {
        let articulo = document.createElement("article");
        articulo.classList.add("articulo");

        let div = document.createElement("div");
        div.classList.add("divImagen");

        let img = document.createElement("img");
        img.src = this.imagen;
        img.classList.add("img");
        div.appendChild(img);
        articulo.appendChild(div);

        let div2 = document.createElement("div");
        div2.classList.add("divTitulo");
        let h2 = document.createElement("h2");
        h2.textContent = this.titulo;
        div2.appendChild(h2);
        articulo.appendChild(div2);

        let ulingredientes = document.createElement("ul");
        ulingredientes.classList.add("divIngredientes");
        this.ingredientes.forEach(element => {
            let li = document.createElement("li");
            console.log (element);
            li.textContent =`${element.food}, ${element.quantity}`;
            ulingredientes.appendChild(li);
        })
        articulo.appendChild(ulingredientes);

        let div4 = document.createElement("div");
        div4.classList.add("divIngredientes");
        let p2 = document.createElement("p");
        p2.textContent = this.ingredientes2;
        div4.appendChild(p2);
        articulo.appendChild(div4);

        let div5 = document.createElement("div");
        div5.classList.add("divTiempo");
        let p3 = document.createElement("p");
        p3.textContent = this.tiempo;
        div5.appendChild(p3);
        articulo.appendChild(div5);

        let div6 = document.createElement("div");
        div6.classList.add("divTipo");
        let p4 = document.createElement("p");
        p4.textContent = this.tipologia;
        div6.appendChild(p4);
        articulo.appendChild(div6);
        
        return articulo;
        

        
        };
    }   
    
    export default Receta;
