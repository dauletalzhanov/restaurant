import menu from './menu.json'

import ramen from './assets/ramen_2.png'
import rice from './assets/rice_dish.png'
import chicken from './assets/fried_chicken.png'
import sushi from './assets/sushi.png'
import noodles from './assets/shrimp_dish.png'
import flan from './assets/bread.png'
import coffee from './assets/coffee_4.png'

export default function(){
	let content = document.querySelector('.content')
	content.innerHTML = ''

	document.body.style.backgroundImage = ''
	document.body.style.backgroundColor = '#eeeeee'
	document.querySelector('header').style.color = 'black'
	document.querySelectorAll("nav > p:first-child").forEach((i)=> i.style.color = 'black')

	let backgrounds = [ramen, rice, sushi, noodles, chicken, flan, coffee]
	let b = 0

	for(let [category, value] of Object.entries(menu)){
		let div = document.createElement('div')
		div.classList.add('menu')

		let h3 = document.createElement('h3')
		h3.innerHTML = category
		h3.classList.add('category')
		div.appendChild(h3)

		for(let i=0; i<value.length; i++){
			let item = document.createElement('div')
			item.classList.add('item')

			let name = document.createElement('p')
			name.innerHTML = i+1 + ". " + value[i].name
			item.appendChild(name)

			let span = document.createElement('span')
			span.innerHTML = "...".repeat(100)
			item.appendChild(span)

			let price = document.createElement('p')
			price.innerHTML = value[i].price
			item.appendChild(price)

			div.appendChild(item)
		}
		
		//item.innerHTML = `${category["name"]} ${category["price"]}`


		div.style.backgroundImage = `url(${backgrounds[b]})`
		b++
		content.appendChild(div)
	}
}