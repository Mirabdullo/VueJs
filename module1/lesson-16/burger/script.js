"use strict"

let btn = document.querySelector('.tugma')
let totalPtice = document.querySelector('.total-price')
let burgerLayerElement = document.querySelector('.food-layers')


function renderLayer(img, idOfElement, total){
    if(img != '' && price != ''){
        let burgerImage = document.createElement('img')
        burgerImage.className = 'image-layer',
        burgerImage.alt = "burger layer image",
        burgerImage.src = img
        totalPtice.textContent = total
        burgerImage.id = idOfElement
        burgerLayerElement.append(burgerImage)
        
    }
}


function removeLayer(idOfElement, price){
    if(idOfElement != '' && price != ''){
        let removingElement = document.getElementById(idOfElement)
        burgerLayerElement.removeChild(removingElement)
        
    }
}



btn.addEventListener('click', (e) => {
    let button = e.target.className;
    switch(button){
        case 'cheese-button':

    }
})