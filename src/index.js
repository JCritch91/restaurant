import './style.css'
import { homeFunction } from "./home"
import { menuFunction } from "./menu";
import { aboutFunction } from "./about" 

function populatePage(){
    const content = document.getElementById('content')

    const populateHome = () =>{
        content.replaceChildren()
        homeFunction()
    }

    const populateMenu = () =>{
        content.replaceChildren()
        menuFunction()
    }

    const populateAbout = () =>{
        content.replaceChildren()
        aboutFunction()
    }

    const button = document.querySelectorAll('button')
    button.forEach(btn =>{
        btn.addEventListener('click', event =>{
            button.forEach(btn =>{
                btn.classList.remove('selected')
                event.target.classList.add('selected')
            })
            if (event.target.id == 'home'){
                populateHome()
            }
            if (event.target.id == 'menu'){
                populateMenu()
            }
            if (event.target.id == 'about'){
                populateAbout()
            }
        })
    })
    populateHome()
}

populatePage()

