import './index.css'

import about from './about.js'
import menu from './menu.js'

function component() {
	const element = document.createElement('div');
	element.innerHTML = 'thats right'
	return element;
}

document.querySelector('button').addEventListener('click', function(){
	let one = Math.round(Math.random()*255)
	let two = Math.round(Math.random()*255)
	let three = Math.round(Math.random()*255)
	let avg = (one+two+three)/3 
	console.log(avg)
	console.log(one, two, three)
	
	document.body.style.backgroundColor = `rgb(${one}, ${two}, ${three})`

	document.body.style.color = avg < 120 ? 'white' : 'black'
	
})

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

document.body.appendChild(component());