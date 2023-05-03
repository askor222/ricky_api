


// modal selector -----------------------------------------------------------------------------


const listaPokemon = document.querySelector('#listaPokemon')
let url = `https://rickandmortyapi.com/api/character/`;

for(let i = 1; i <= 10; i++){ //826
    fetch(url + i)
        .then(res => res.json())
        // como se relaciona este funcion promesa con el funcion que creamos fuera
        .then(data => mostrarPokemon(data))
}




    //duda: el parametro data no lo entiendo
function mostrarPokemon(poke){  // poke hace referencia a todo el objeto

// modal selector -----------------------------------------------------------------------------
    const openModal = document.querySelector('.hero__cta');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close');

    
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
            //button
            <header class="hero">
              <section class="hero__main container">
                  <div class="hero__texts">
                      <a href="#" class="hero__cta" id="join">Join us!</a>
                  </div>
              </section>
        
              <div style="height: 150px; overflow: hidden;" class="hero__waves" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M0.00,49.99 C262.08,217.40 378.89,-120.09 500.00,49.99 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #fff;"></path></svg></div>
            </header>
        
        
          <!-- Letter --------------------------------------------------->
          <section class="modal ">
            <div class="modal__container">
              <img src="" class="modal__img">
              <h2 class="modal__title">¡estas viendo el modal!</h2>
              <p class="modal__paragraph">este es un parrafo</p>
              <a href="#" class="modal__close">Cerrar Modal</a>
          </div>
          </section>

            </div>
        </div>`;
    listaPokemon.append(div);

    openModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.add('modal--show');
    });
    
    closeModal.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('modal--show');
    });
}

async function verProducto(id){
    console.log(id)
}



// modal -----------------------------------------------------------------------------
