"use strict";




let them = document.querySelector('#them'),
    header = document.querySelector('header');

them.addEventListener('input', (e) => {
    localStorage.setItem('them', e.target.checked);
    changeMode()
})


function changeMode() {

    let mode = localStorage.getItem('them');

    if (mode === 'true') {
        document.body.style.cssText = "background-color:#202C36; color:#fff;"
        header.style.cssText = "background-color:#2B3844; color:#fff;"

    } else {
        document.body.style.cssText = "background-color:#F2F2F2; color:#000;"
        header.style.cssText = "background-color:#ffff; color:#000;"
    }
}

changeMode()



// ---------------------------- DYNAMIC CARDS ----------------------------


let baseURL = "https://restcountries.com/v2/all";

let filterUrl = "https://restcountries.com/v2/region";
let searchUrl = "https://restcountries.com/v2/name";

let wrapperCards = document.querySelector('.card__wrapper');
let select = document.querySelector('#region') 
let mode = localStorage.getItem('them');



const getAllCountries = async () => {

    wrapperCards.innerHTML = `<span class="loader"></span>`;

    try {
        const response = await fetch(baseURL);
        const result = await response.json();

        if (response.status === 200) {
                renderCards(result)
                filterRegion(result)
        } 

    } catch (err) {
        console.log(err)
    }
}

getAllCountries()



// ---------------------- render cards ----------------------------



function renderCards(cards) {

    wrapperCards.innerHTML = ``;

    cards.forEach(element => {

        const card = createElement('div', `rounded-[5px] ${mode ? 'bg-white' :  'bg-black'} shadow-lg bg-white max-w-sm w-[264px] h-[336px]`, `
    
              <a href="#!">
                <img
                  class="rounded-t-lg w-full h-[160px]"
                  src="${element.flags.svg}"
                  alt="img"
                />
              </a>
              <div class="p-6 pb-7">
                <h5 class="text-gray-900 text-xl font-medium mb-2" data-isname"${element.name}">
                  ${element.name}
                </h5>
                <ul class="list-none">
                  <li><strong>Population:</strong> ${element.population}</li>
                  <li><strong>Region:</strong> ${element.region}</li>
                  <li><strong>Capital:</strong> ${element.capital || "not-found"}</li>
                </ul>
              </div>
    
        `);

       

        wrapperCards.append(card)

    });
}




function filterRegion(data){
    const region = []
    data.forEach((item) => {
        if(!region.includes(item.region)){
            region.push(item.region)
        }  
    })

    region.sort()
    region.forEach((item) => {
        const option = createElement('option', 'item', item)
        select.append(option)
    })
}


async function fetchRegions(region){
    wrapperCards.innerHTML = `<span class="loader"></span>`;

    const respons = await (await fetch(`${filterUrl}/${region}`)).json()
    renderCards(respons)
}





select.addEventListener('change', (e) => {
    wrapperCards.innerHTML = ``;
    fetchRegions(e.target.value)
})



// ////////////////// search ///////////////


let searchInput = document.querySelector('#search')

async function searchCountries(country){
    wrapperCards.innerHTML = `<span class="loader"></span>`;
    try {
        const response = await fetch(`${searchUrl}/${country}`)
        const result = await response.json()

        if(response.status === 200){
            renderCards(result)       
        }else {
            wrapperCards.innerHTML = `<h1 class="uppercase text-4xl text-orange-500 font-extrabold">This country not found</h1>`
        }
    } catch (error) {
        console.log(error);
    }
} 


searchInput.addEventListener('keyup', (e) => {
    wrapperCards.innerHTML = ``;
    if(e.target.value.trim().length > 0){
    wrapperCards.innerHTML = ``;
    searchCountries(e.target.value)
    }else{
        searchInput.setAttribute('placeholder', "plase enter country name")
        getAllCountries()
    }
})






// ================================= = = = =   ================================


wrapperCards.addEventListener('click', (e) => {
    if(e.target.classList.contains('card_title')){
        const isname = e.target.getAttribute('data-isname')
        
    }
})


