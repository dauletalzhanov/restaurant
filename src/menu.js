
export default function(){
	let content = document.querySelector('.content')
	content.innerHTML = ''

	document.body.style.backgroundImage = ''
	document.querySelector('header').style.color = 'BLACK'
	document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.00)'

	let menu = document.createElement('ul')
	
	let item1 = document.createElement('li')
	item1.innerHTML = 'salad'
	menu.appendChild(item1)

	let item2 = document.createElement('li')
	item2.innerHTML = 'pizza'
	menu.appendChild(item2)

	let item3 = document.createElement('li')
	item3.innerHTML = 'mochaccino with extra whip cream'
	menu.appendChild(item3)
		

	content.appendChild(menu)
}