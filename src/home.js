const homeFunction = () =>{
    console.log('hello from home')

    let homeArray = [
        {
            name: 'Xiao Bear - ',
            description: 'Panda Restaurant is by far the best place to visit in the Sichuan region. The staff were all very clean and friendly. <br> I will definitely return again !'
        },
        {
            name: 'Hours',
            description: 'Monday: 06:00 - 16:00 <br><br> Tuesday: Closed <br><br> Wedesday: 06:00 - 16:00 <br><br> Thursday: 08:00 - 18:00 <br><br> Friday: 08:00 - 18:00 <br><br> Saturday: 06:00 - 22:00 <br><br> Sunday: 10:00 - 16:00'
        },
        {
            name: 'Location',
            description: 'Mountain range <br> Sichuan <br> China'
        }

    ]

    let container, div, p, h1, h3

    container = document.createElement('div')
    container.classList.add('home')

    h1 = document.createElement('h1')
    h1.textContent = 'Panda Restaurant'
    container.appendChild(h1)

    for (let i=0; i<homeArray.length; i++){
        div = document.createElement('div')
        div.classList.add('itemContainer')

        p = document.createElement('p')
        h3 = document.createElement('h3')
        h3.innerHTML = homeArray[i].name
        div.appendChild(h3)

        p.innerHTML = homeArray[i].description
        div.appendChild(p)
        container.appendChild(div)
    }

    content.appendChild(container)
}

export {homeFunction}