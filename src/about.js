const aboutFunction = () =>{

let aboutArray = [
    {
        name: 'Local Store Phone',
        description: '+86 10 5654 2537'
    },
    {
        name: 'Main Office Phone',
        description: '+86 10 2343 4565'
    },
    {
        name: 'Feedback',
        description: 'nicefeedbackplease@pandamail.com'
    },
    {
        name: 'Complaints',
        description: 'wedontactuallycare@pandamail.com'
    }
]

let container, div, h1, h3, p

container = document.createElement('div')
container.classList.add('about')

h1 = document.createElement('h1')
h1.textContent = 'Contact Us'
container.appendChild(h1)

for(let i = 0; i<aboutArray.length; i++){
    div = document.createElement('div')
    div.classList.add('itemContainer')

    p = document.createElement('p')
    h3 = document.createElement('h3')
    h3.innerHTML = aboutArray[i].name
    div.appendChild(h3)

    p.innerHTML = aboutArray[i].description
    div.appendChild(p)
    container.appendChild(div)
}
    content.appendChild(container)

}

export {aboutFunction}