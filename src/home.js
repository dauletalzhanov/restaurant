import kyoto from './assets/kyoto.jpg'

export default function(){
	let content = document.querySelector('.content')
	content.innerHTML = ''

	document.body.style.backgroundImage = `url(${kyoto})`

	document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0.20)'
	document.querySelector('header').style.color = 'white'
	
	let div = document.createElement('div')
	div.classList.add('title')

	let h1 = document.createElement('h1')
	h1.innerHTML = 'RISING SUN'
	h1.style.color = 'orange'

	let h1Jap = document.createElement('h1')
	h1Jap.innerHTML = '殺された獲物'
	h1Jap.style.color = 'brown'

	div.appendChild(h1)
	div.appendChild(h1Jap)
	content.appendChild(div)
}