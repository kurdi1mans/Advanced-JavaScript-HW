const P = new Pokedex.Pokedex();

let pokemonList = null;
let pokemonListLoaded = false;

let pokemonDetails = null;
let pokemonDetailsLoaded = false;

const getPokemonListCall = async () =>
{
    pokemonList = await P.getPokemonsList();
    pokemonList = pokemonList.results;
    pokemonListLoaded = true;
}

const getPokemonDetailsCall = async () =>
{
    if(!pokemonListLoaded)
    {
        setTimeout(getPokemonDetailsCall,5000);
    }
    else
    {
        pokemonDetails = await Promise.all(
            pokemonList.map(async (pok) => await P.getPokemon(pok.name))
        );
        pokemonDetailsLoaded = true;
    }
}

const processData = () =>
{
    if(pokemonListLoaded && pokemonDetailsLoaded)
    {
        console.log(pokemonList);
        console.log(pokemonDetails);
        
        let htmlStr = "";
        let divisor = 0;
        for (let i = 0; i < pokemonList.length; i++)
        {
            htmlStr+=
                    `<div class="col d-flex">
                            <div class="card">
                            <img src="${pokemonDetails[i].sprites.front_default}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5>${pokemonList[i].name}</h5>
                            </div>
                        </div>	
                    </div>`;
        }


        const container = document.getElementById('CardsContainer');
        container.innerHTML = htmlStr;
    }
    else
    {
        setTimeout(processData,5000);
    }
}

getPokemonListCall();
getPokemonDetailsCall();
processData();
