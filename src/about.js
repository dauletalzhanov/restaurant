
export default function(){
	
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.querySelector('header').style.color = 'BLACK'
	document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.00)'
	

	content.innerHTML = ''
	let element = document.createElement('p')
	element.innerHTML = 'about me'
	content.appendChild(element)



}