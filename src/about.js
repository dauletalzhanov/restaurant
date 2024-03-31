
export default function(){
	
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.querySelector('header').style.color = 'BLACK'
	

	content.innerHTML = ''
	let element = document.createElement('p')
	element.innerHTML = 'about me'
	content.appendChild(element)



}