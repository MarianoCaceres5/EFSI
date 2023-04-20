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
                    <div class="card-pokemon" onclick="MostrarDetalle(${pokemon.id})">
                        <img width="50%" src="${pokemon.sprites.front_default}" alt="">
                        <h1>${pokemon.name}</h1>   
                                        
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
    document.querySelector(".card-informacion").innerHTML = `
        <div class="circulo"></div>
        <div class="encabezado">
            <img class="foto-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonElegido.id}.png" alt="">   
            <h1>${pokemonElegido.name}</h1>             
        </div>
        <div class="informacion">
            <h2>${pokemonElegido.base_experience}</h2>          
            <h4>Experiencia</h4>       
            <h2>${pokemonElegido.stats[1].base_stat}</h2>          
            <h4>Ataque</h4>    
            <h2>${pokemonElegido.stats[2].base_stat}</h2>          
            <h4>Defensa</h4>    
        </div>   
                
        
    `;
}