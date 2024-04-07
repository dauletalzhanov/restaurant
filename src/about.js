import business from './assets/business.jpg'
import food from './assets/food3.jpg'
import reviews from './reviews.json'

export default function(){
	let content = document.querySelector('.content')
	document.body.style.backgroundImage = ''
	document.body.style.backgroundColor = '#eeeeee'
	document.querySelector('header').style.color = 'BLACK'
	

	content.innerHTML = ''
	let uno = document.createElement('div')
	uno.classList.add('uno')

	let banner = document.createElement('div')
	banner.classList.add('banner')

	let h3 = document.createElement('h3')
	h3.innerHTML = 'RISING SUN'
	
	h3.addEventListener('mouseenter', function(){
		this.innerHTML = '殺された獲物';
	})
	h3.addEventListener('mouseleave', function(){
		this.innerHTML = 'RISING SUN';
	})
	banner.appendChild(h3)

	let rightie = document.createElement('div')
	rightie.innerHTML = '<p> Opening Hours: 08:00 - 21:00 </p>'
	rightie.innerHTML += '<p> Rising Sun, 1136-49, Nakagamicho, Akishima, Tokyo, Japan </p>'
	
	banner.appendChild(rightie)

	uno.appendChild(banner)

	let pic = document.createElement('img')
	pic.src = business
	pic.classList.add('first-pic')
	uno.appendChild(pic)
	content.appendChild(uno)

	///////////////////////////////////////////////////////////////////////
	let dos = document.createElement('div')
	dos.classList.add('dos')


	let foodPic = document.createElement('img')
	foodPic.src = food
	dos.appendChild(foodPic)

	let dosDiv = document.createElement('div')
	dosDiv.classList.add('dosdiv')
	dosDiv.innerHTML = '<h4> What Makes Our Food Unique?</h4>'
	dosDiv.innerHTML += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique magna sit. Fames ac turpis egestas maecenas pharetra. Tempor nec feugiat nisl pretium fusce id velit. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac felis donec et odio pellentesque diam volutpat commodo. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Nisl condimentum id venenatis a. Risus nec feugiat in fermentum posuere urna nec. Phasellus vestibulum lorem sed risus. Eu volutpat odio facilisis mauris sit amet massa. Cursus in hac habitasse platea. Nam at lectus urna duis convallis convallis tellus. Eget magna fermentum iaculis eu non diam. </p>'
	dosDiv.innerHTML += '<p> サピエンス・フォーシバスとモレスティーとフェーギアの塊がベッドを除くまで。 猫は喉のように純粋な矢で追いかけられる必要がある。 トラックやトラックの需要は非常に高いです。 食欲をそそる悲しい笑いや歓喜が起こるまで モーリスの震えもウルトリスのどちらも飾りません。 しかし、もしそれが湖ではなく、登山者だったとしたら、彼はこの通りに住んでいたでしょう。 ラオレートは、妊娠中の弓と拷問の威厳に世話をされることはありません。 彼は治療用の矢のために常に純粋なチョコレートを必要としています。 チョコレートは現在最も一般的な病気です。 湖の担い手は、いつものように自分に重荷を負わせることを嘆いている。 明日からの谷は、常に作者でも人生の時間でもありません。 飢餓と醜さには震えが必要だ。 フリンギラ・ファセッラス・フォーシバス・チョコレート・エレフェンドまでの必要性。 商品の価格が非常に安い、または価格が安い。 湖は過ごしやすい週末です。 ライオンや病院の門は時々枕や月桂冠を吊り下げませんでした。 Tincidunt のプロパガンダは、大衆に Euismod を求めることがあります。 第 2 層の資金調達が重要であるという事実を利用する必要はありません。 テルス整数フギアでのヴィヴェッラ・アディピシング。</p>'
	dos.appendChild(dosDiv)
	
	content.appendChild(dos)

	///////////////////////////////////////////////////////////////////////
	let tres = document.createElement('div')
	tres.classList.add('tres')
	tres.innerHTML = `<h2> Reviews </h2>`
	
	let tresDiv = document.createElement('div')
	tresDiv.classList.add('tresdiv')
	for(let i=0; i<reviews.length; i++){
		console.log(reviews[i])
		let card = document.createElement('div')
		card.classList.add('card')
		card.innerHTML = `<div><div><p class="review-name">${reviews[i].Name}</p><p class="review-date">${reviews[i].Date}</p></div><p class="review-rating">${reviews[i].Rating}</p></div>`
		card.innerHTML += `<p>${reviews[i].Review}</p>`
		tresDiv.appendChild(card)
	}
	tres.appendChild(tresDiv)
	content.appendChild(tres)

	///////////////////////////////////////////////////////////////////////
	let quatro = document.createElement('div')
	quatro.classList.add('quatro')

	
	content.appendChild(quatro)
}