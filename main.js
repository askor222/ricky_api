


// modal selector -----------------------------------------------------------------------------


const listaPokemon = document.querySelector('#listaPokemon')
let url = `https://rickandmortyapi.com/api/character/`;

for(let i = 1; i <= 826; i++){ //826
    fetch(url + i)
        .then(res => res.json())
        // como se relaciona este funcion promesa con el funcion que creamos fuera
        .then(data => mostrarPokemon(data))
}


    //duda: el parametro data no lo entiendo
function mostrarPokemon(poke){  // poke hace referencia a todo el objeto
    
    let tipos = poke.status
    console.log(tipos);

    const div = document.createElement("div");
    div.classList.add("pokemon")
    const { image, id, name, status, species, gender } = poke;
    div.innerHTML =               // a la caja div se le agrega html
        `<p class="pokemon-id-back">#${id}</p>
        <div class="pokemon-imagen">
            <img src="${image} " alt="Pikachu">
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#${id}</p>
                <h2 class="pokemon-nombre">${name}</h2>
            </div>
            <div class="pokemon-tipos">
                <p class="electric tipo">${status}</p>
                <p class="water tipo">${species}</p>
                <p class="grass tipo">${gender}</p>
            </div>
            <div class="pokemon-stats">

            </div>
        </div>`;
    listaPokemon.append(div);
}

