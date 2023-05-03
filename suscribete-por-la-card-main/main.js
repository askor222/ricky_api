const container = document.querySelector(".container")

const pizza = "https://rickandmortyapi.com/api/character/425";

fetch(pizza)
    .then(res => res.json())
    .then(data => console.log(data))


const pintarCard = (datas)=>{
    const template = document.querySelector('#template-cards').content
    const container = document.querySelector(".flex");
    const card = document.querySelector(".card");
    const fragment = document.createDocumentFragment()
    datas.
    //container.querySelector('card-body-img').setAttribute('src', 'estatico')

}
