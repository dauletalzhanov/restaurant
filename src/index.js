// css
import './index.css'

// images
import spring from './assets/spring.svg'

// content
import about from './about.js'
import menu from './menu.js'
import home from './home.js'
import contact from './contact.js'

/////////////////////////////////////////
home()

// setting the favicon
const link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
}
link.href = spring;


///////////////////////////////////////////////////////////
const aboutButton = document.querySelector('#aboutButton')
aboutButton.addEventListener('click', ()=> {
	about()
})

/////////////////////////////////////////////////////
const menuButton = document.querySelector('#menuButton')
menuButton.addEventListener('click', ()=>{
	menu()
})

///////////////////////////////////////////////////////
const contactButton = document.querySelector('#contactButton')
contactButton.addEventListener('click', ()=>{
	contact()
})

///////////////////////////////////////////////////////
//document.querySelector('#logo').src = spring
let logo = document.querySelector('#logo')
logo.src = spring
logo.addEventListener('click', function(){
    home()
})

////////////////////////////////////////////////////
const header = document.querySelector('header')
document.addEventListener('mousemove', function(e){
    const mouseY = e.clientY
    const windowHeight = window.innerHeight
    
    if(mouseY < (windowHeight * 0.15))
        header.style.display = 'flex'
    else
        header.style.display = 'none'
})