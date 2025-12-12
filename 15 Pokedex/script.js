document.addEventListener("DOMContentLoaded", function(){
    //#region Image task
    const imgOptions = {};
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach((entry) => {
            if(!entry.isIntersecting) return;
            const img = entry.target;
            var dataImage = img.getAttribute("data-image");
            img.src = dataImage;
            imgObserver.unobserve(img);
        })
    }, imgOptions);
    
    //#endregion


    //#region region CONSUMO DE API
    const fetchPokemon = async(endpoint) => {
        let data;
        try {
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            data = await response.json();
        } catch(error){
            console.log(error);
        }
        return data.pokemon_species;
    };
    //#endregion

    //#region Order numbers
    function orderNumber(str){
        var mySubstring = str.substring(
            str.lastIndexOf("s/")+2, str.lastIndexOf("/")
        );
        return mySubstring;
    }
    //#endregion

    //#region agregar pokemon al html
    async function getPokemon(number, toggle){
        let endpoint = `https://pokeapi.co/api/v2/generation/${number}/`;
        var container = document.getElementById("container");
        container.innerHTML = "";
        let pokemon = [];
        pokemon = await fetchPokemon(endpoint);
        for (let j = 0; j < pokemon.length; j++) {
            pokemon[j].nr = orderNumber(pokemon[j].url);
        }
        pokemon.sort((a, b) => a.nr - b.nr);
        pokemon.forEach((poke) =>{
            let numero3decimales = orderNumber(poke.url);
            if (numero3decimales < 10){
                numero3decimales = "00" + numero3decimales;
            } else if (numero3decimales < 100){
                numero3decimales = 0 + numero3decimales;
            }

            let divitem = document.createElement("li");
            divitem.classList.add("item");
            var img = new Image();
            const toggleurl = toggle? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/": "https://www.serebii.net/pokemongo/pokemon/";
            img.src = "https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif";
            const urlImage = `${toggleurl}${numero3decimales}.png`;
            img.setAttribute("data-image", urlImage);
            img.setAttribute("class", "pokeimage");
            img.setAttribute("alt", poke.name);
            
            divitem.innerHTML = `<div> ${orderNumber(poke.url)}-${poke.name} </div>`;
            divitem.appendChild(img);
            container.appendChild(divitem);
            imgObserver.observe(img);
        });
    }
    //#endregion
    
   
    //#region generations
    var numero = 1;
    getPokemon(numero);
    var toggle=false;
    btnicono.addEventListener("click", function(){
        toggle = !toggle;
        getPokemon(numero, toggle);
    })
    var generation = ["generation-1", "generation-2", "generation-3", "generation-4", "generation-5", "generation-6", "generation-7", "generation-8"];
    var filters = document.getElementById("filters");

    var gen = "";
    for( let i=0; i < generation.length; i++){
        gen += `<input class="radio-gens" type="radio" id=${generation[i]} value=${i+1} name="generation" checked>
    <label for=${generation[i]} class="label-gens"> ${generation[i]} </label>`
    }
    filters.innerHTML = gen;
    filters.addEventListener("click", function(e){
        let target = e.target.type;
        if (target === "radio"){
            getPokemon(e.target.value, toggle);
            title.innerHTML = "Pokemon " + e.target.id;
        }
    })
    //#endregion
});