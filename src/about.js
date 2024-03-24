
export default function(){
	let content = document.querySelector('.content')

	content.innerHTML = ''
	let element = document.createElement('p')
	element.innerHTML = 'about me'
	content.appendChild(element)

}