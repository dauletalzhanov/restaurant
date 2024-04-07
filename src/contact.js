import image from './assets/lanterns.jpg'

export default function(){
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.body.style.backgroundColor = 'rgb(247, 242, 236)'
	document.body.style.backgroundColor = 'darkgray'
	document.querySelector('header').style.color = 'black'
	document.querySelectorAll("nav > p:first-child").forEach((i)=> i.style.color = 'white')
	content.innerHTML = ''


	let first = document.createElement('div')
	first.classList.add('first')

	const h1Contact = document.createElement('h1')
	h1Contact.innerHTML = 'CONTACT'
	first.appendChild(h1Contact)

	let list_details = document.createElement('div')
	list_details.classList.add('list_details')

	const phone = document.createElement('p')
	phone.innerHTML = '+81000000000'
	list_details.appendChild(phone)

	const email = document.createElement('p')
	email.innerHTML = 'rising_sun@tokyo.jp'
	list_details.appendChild(email)

	const address = document.createElement('p')
	address.innerHTML = 'Rising Sun, 1136-49, Nakagamicho, Akishima, Tokyo, Japan'
	list_details.appendChild(address)
	
	const cont = document.createElement('p')
	cont.innerHTML = '08:00 - 21:00'
	list_details.appendChild(cont)
	
	first.appendChild(list_details)

	const map = document.createElement('iframe');
	map.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.47223045883754!2d139.37255723193903!3d35.71254992290404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e1637be3bb81%3A0x4e96c3a536c189f7!2sRising%20Sun!5e0!3m2!1sen!2suk!4v1711920155029!5m2!1sen!2suk');
	map.setAttribute('style', 'border:0; width: 60vw; height: 40vh; margin-top: 2vh;');
	map.setAttribute('loading', 'lazy');
	map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
	first.appendChild(map);

	let socials = document.createElement('div')
	socials.classList.add('list_details')

	const twitter = document.createElement('p')
	twitter.innerHTML = '<a href="https://www.twitter.com">Twitter</a>'
	socials.appendChild(twitter)

	const facebook = document.createElement('p')
	facebook.innerHTML = '<a href="https://www.facebook.com">Facebook</a>'
	socials.appendChild(facebook)

	const instagram = document.createElement('p')
	instagram.innerHTML = '<a href="https://www.instagram.com">Instagram</a>'
	socials.appendChild(instagram)

	const tiktok = document.createElement('p')
	tiktok.innerHTML = '<a href="https://www.tiktok.com">Tiktok</a>'
	socials.appendChild(tiktok)

	

	first.appendChild(socials)

	content.appendChild(first)


	///////////////////////////////////////////////////////////////
	let second = document.createElement('div')
	second.classList.add('second')
	second.innerHTML = `花は桜木人は武士`
	content.appendChild(second)

	///////////////////////////////////////////////////////////////
	let third = document.createElement('div')
	third.classList.add('third')
	
	third.style.backgroundImage = `url(${image})`
	let h1Booking = document.createElement('h1')
	h1Booking.innerHTML = 'Reservations'
	
	third.appendChild(h1Booking)

	let label1 = document.createElement('input')
	label1.setAttribute('type', 'text')
	label1.placeholder = 'Enter your name'
	third.appendChild(label1)

	let label2 = document.createElement('input')
	label2.setAttribute('type', 'number')
	label2.placeholder = 'Enter your phone number'
	third.appendChild(label2)

	let label3 = document.createElement('input')
	label3.setAttribute('type', 'email')
	label3.placeholder = 'Enter your email'
	third.appendChild(label3)

	let label4 = document.createElement('textarea')
	label4.placeholder = 'Please enter alergy information, special circumstances or anything important'
	third.appendChild(label4)


	let label5ish = document.createElement('label')
	label5ish.innerHTML = 'Book a Time Slot'
	third.appendChild(label5ish)

	let label5 = document.createElement('input')
	label5.setAttribute('type', 'time')
	third.appendChild(label5)

	let label6 = document.createElement('input')
	label6.setAttribute('type', 'date')
	third.appendChild(label6)

	//let label7 = document.createElement('input')
	//label7.setAttribute('type', 'text')
	//label7.placeholder = 'Where would you like to seat?'
	//third.appendChild(label7)

	let label7ish = document.createElement('label')
	label7ish.innerHTML = 'Where would you like to sit?'
	third.appendChild(label7ish)


	let label7 = document.createElement('select')
	label7.innerHTML = '<option>Normal Lounge</option>'
	label7.innerHTML += '<option>By the Bar</option>'
	label7.innerHTML += '<option>Outside</option>'
	label7.innerHTML += '<option>VIP Lounge</option>'
	
	third.appendChild(label7)

	const button = document.createElement('button')
	button.innerHTML = 'Book!'
	third.appendChild(button)

	content.appendChild(third)
}