import './style.css'
import { functionOne } from "./home"

function populatePage(){
    const content = document.getElementById('content')

    const populateHome = () =>{
        content.replaceChildren()
        console.log('home')

        functionOne()
    }


    const populateMenu = () =>{
        console.log('menu')
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

}

populatePage()