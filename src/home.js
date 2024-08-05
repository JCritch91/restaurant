const functionOne = () =>{
    console.log('hello from functionOne')

    let container, p, p1, p2, h1

    container = document.createElement('div')
    container.classList.add('home')

    h1 = document.createElement('h1')
    h1.textContent = 'Panda Restaurant'
    container.appendChild(h1)

    p=document.createElement('p')
    p1=document.createElement('p')
    p2=document.createElement('p')
    p.innerHTML='Panda restaurant is the most popular restaurant in the forest! Selling bamboo recipes that will satisfy any Panda appetite. <br> Come visit us today to ty our world famous bamboo bolognaise!'
    container.appendChild(p)

    p1.innerHTML = 'Hours: <br> Monday: 06:00 - 16:00 <br> Tuesday: Closed <br> Wedesday: 06:00 - 16:00 <br> Thursday: 08:00 - 18:00 <br> Friday: 08:00 - 18:00 <br> Saturday: 06:00 - 22:00 <br> Sunday: 10:00 - 16:00'
    container.appendChild(p1)

    p2.innerHTML = 'Location: <br> Mountain range, Sichuan, China'
    container.appendChild(p2)

    content.appendChild(container)
}

export {functionOne}