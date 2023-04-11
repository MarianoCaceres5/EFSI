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
        console.log(pokemon);
        
        document.querySelector("#lista").innerHTML += `
            <li>
                <div class="cardPokemon">
                    <h1>${pokemon.name}</h1>
                    <img src="${pokemon.sprites.back_default}" alt="">
                </div>
            </li>
        `;
    })
    .catch((error) => {
        console.log(error);
    });
}

function CargarDatos(url) {
    axios
        .get(url)
        .then((result) => {
            console.log(result.data);
        })
        .catch((error) => {
            console.log(error);
        });
}