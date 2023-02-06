"use strict"


const modalWindow = document.querySelector('.modal-window'),
closeBtn = document.querySelector('.close-btn'),
signUpBtn = document.querySelector('.register-btn'),
modalContent = document.querySelector('.modal-content'),
introProduct = document.querySelector('.intro__product--info'),
aboutCard = document.querySelector('.about__card')


signUpBtn.addEventListener('click', () => {
    modalWindow.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    modalWindow.classList.add('hidden')
})

modalWindow.addEventListener('click', (e) => {
    console.log(e.target.classList.contains('modal-window'));{
        if(e.target.classList.contains('modal-window')){
            modalContent.classList.toggle('shaker')
        }
    }
})

 


// ---------------  dynamic elements  --------------------------------//

let cards = [
    {
        id: 1,
        img: "./images/user 1.svg",
        title: "30K",
        description: "User Order"
    },
    {
        id: 1,
        img: "./images/Vector (1).svg",
        title: "20K",
        description: "Reviews(4.8)"
    },
    {
        id: 1,
        img: "./images/Group (1).svg",
        title: "300",
        description: "Items"
    },
]


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





cards.forEach(items => {
    const newElemnt = createElemnt('div', "card hover:shadow-lg shadow bg-white flex justify-between items-center py-5 pr-11 px-8 rounded-sm mb-[30px]",
        `<span class="bg-green-200 p-4 rounded-full"><img src="${items.img}" alt="user"></span>

        <div class="flex flex-col items-center justify-center ml-3">
          <h2 class="text-5xl font-normal">${items.title}</h2>
          <p>${items.description}</p>
        </div>
      `
    )

    introProduct.append(newElemnt)
})





let about_cards = [
    {
        id: 1,
        img: "./images/Vector (2).svg",
        title: "Fasted delivery Service",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 1,
        img: "./images/Vector (3).svg",
        title: "Online order Service",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: 1,
        img: "./images/Group (2).svg",
        title: "24/8 Service",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
]





about_cards.forEach(item => {
    const newElemnt = createElemnt("div",
    "info__content---items-item w-[500px] h-[160px] px-[60px] py-10  hover:bg-green-50",
    `
    <div class="flex justify-around">
      <div
        class="info__content---items-item-logo bg-green-50 w-20 h-20 flex items-center justify-center rounded-full"
      >
        <img src="${item.img}" alt="delivery-man" />
      </div>
      <div>
        <h3 class="font-bold text-5 leading-[30px]">
        ${item.title}
        </h3>
        <p
          class="font-normal text-[14px] leading-5 w-[277px] text-[#555555]"
        >${item.description}
        </p>
      </div>
    </div>`
    )

    aboutCard.append(newElemnt)
})

let icon = document.querySelector('.icon')

icon.onclick = function(e) {
    console.log(object);
}