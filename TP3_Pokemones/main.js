let ARRAY_POKEMONES = [];

axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then((result) => {    
        const pokemones = result.data.results;
        //console.log(pokemones)
        pokemones.map((pokemon) => {
            const { url } = pokemon;            
            CargarPokemon(url);
        });
    })
    .catch((error) => {
        console.log(error);
    });



function CargarPokemon(url){
    axios
    .get(url)
    .then((result) =>{
        
        let pokemon = result.data;
        ARRAY_POKEMONES.push(pokemon);
        console.log(pokemon);
        
        document.querySelector("#lista-pokemones").innerHTML += `
            <li>
                <div class="card-pokemon">
                    <img src="${pokemon.sprites.front_default}" alt="">
                    <h1>${pokemon.name}</h1>   
                    <button id="boton-mostrar-pokemon" onclick="MostrarDetalle(${pokemon.id})">Detalle Pokemon</button>                 
                </div>
            </li>
        `;
    })
    .catch((error) => {
        console.log(error);
    });
}

function MostrarDetalle(id){
    let nuevoArray = ARRAY_POKEMONES.filter(pokemon => pokemon.id == id);
    let pokemonElegido = nuevoArray[0];
    document.querySelector(".card-informacion").style.display = "block";
    document.querySelector(".card-informacion").innerHTML = ``;
    document.querySelector(".card-informacion").innerHTML += `
        
        <div class="encabezado">
            <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonElegido.id}.svg" alt="">   
            <h1>${pokemonElegido.name}</h1>             
        </div>
        <div class="informacion">
            <h3>${pokemonElegido.base_experience}</h3>          
        </div>
        
                
        
    `;
}