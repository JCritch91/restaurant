import './style.css'
import { homeFunction } from "./home"
import { menuFunction } from "./menu";

function populatePage(){
    const content = document.getElementById('content')

    const populateHome = () =>{
        content.replaceChildren()
        homeFunction()
    }

    const populateMenu = () =>{
        content.replaceChildren()
        console.log('menu')
        menuFunction()
    }



    const populateAbout = () =>{
        console.log('about')
    }



    const button = document.querySelectorAll('button')
    button.forEach(btn =>{
        btn.addEventListener('click', event =>{
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

