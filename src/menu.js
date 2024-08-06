

const menuFunction = () =>{

    let drinks = [
        {
            name: 'Water',
            description: 'Collected from a local stream',
            price: '¥2'
        },
        {
            name: 'Soybean Milk',
            description: 'A drink for a Panda with a sensitive stomach',
            price: '¥4'
        },
        {
            name: 'Baiju',
            description: 'An alcoholic beverage for a Panda in need of a stiff drink',
            price: '¥10'
        },
        {
            name: 'Berry Tea',
            description: 'Made with berrys local to the forest',
            price: '¥3'
        }
    ]

    let food = [
        {
            name: 'Bamboo Sticks',
            description: 'Simple, but delicious bamboo sticks. To be easten as a starter or a side',
            price: '¥4'
        },
        {
            name: 'Bamboo Bolognaise',
            description: 'Our world famous recipe. Can you guess what the secret ingredient is?!',
            price: '¥10'
        },
        {
            name: 'Bamboo Soup',
            description: 'A great, refreshing meal to satisfy any Panda. Includes a side of bread',
            price: '¥7'
        },
        {
            name: 'Mud Pie',
            description: 'A hearty dish with lots of flavour. Hand picked from the local forest',
            price: '¥12'
        },
        {
            name: 'Leaf Salad',
            description: 'Made with a healthy Panda in mind. Packed with nutrients',
            price: '¥6'
        }
    ]


    let h1, h2, h22, h3, p, p2, div, mainContainer, subSection, subSection2
    mainContainer = document.createElement('div')
    subSection = document.createElement('div')
    mainContainer.classList.add('menu')
    subSection.classList.add('subSection')

    h1 = document.createElement('h1')
    h1.textContent = 'Menu'
    mainContainer.appendChild(h1)

    h2= document.createElement('h2')
    h2.textContent = 'Drinks'
    subSection.appendChild(h2)

    for (let i = 0; i<drinks.length; i++){
        div = document.createElement('div')
        div.classList.add('itemContainer')
        h3 = document.createElement('h3')
        p = document.createElement('p')
        p2 = document.createElement('p')
        h3.textContent = drinks[i].name
        div.appendChild(h3)
        p2.textContent = drinks[i].description
        div.appendChild(p2)
        p.textContent = drinks[i].price
        div.appendChild(p)
        subSection.appendChild(div)
    }
    mainContainer.appendChild(subSection)


    h22= document.createElement('h2')
    subSection2= document.createElement('div')
    subSection2.classList.add('subSection2')
    h22.textContent = 'Food'
    subSection2.appendChild(h22)

    for (let i = 0; i<food.length; i++){
        div = document.createElement('div')
        div.classList.add('itemContainer')
        h3 = document.createElement('h3')
        p = document.createElement('p')
        p2 = document.createElement('p')
        h3.textContent = food[i].name
        div.appendChild(h3)
        p2.textContent = food[i].description
        div.appendChild(p2)
        p.textContent = food[i].price
        div.appendChild(p)
        subSection2.appendChild(div)
    }
    mainContainer.appendChild(subSection2)
    content.appendChild(mainContainer)
}

export {menuFunction}