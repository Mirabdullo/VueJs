"use strict"

const productCards = document.querySelector('.products')


const createElemnt = (tagName, className, content) => {
    const element = document.createElement(tagName)

    if(className){
        element.setAttribute('class', className)
    }

    if(content){
        element.innerHTML = content
    }

    return element
}

console.log(products);




function renderCardList(product){
    product.forEach(element => {
        console.log(element);
        const prod = createElemnt('div', "col-3 gap-5", 
        `
        <div class="card" style="width: 18rem;">
        <img src="https://picsum.photos/300/250" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `
      )
      productCards.append(prod)
    });
}

renderCardList(products)