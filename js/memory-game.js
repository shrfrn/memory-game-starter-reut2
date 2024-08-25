'use strict'

function init() {
    console.log('Hi')
}

function onCardClick(elCard) {
	var elSelectedCards = document.querySelectorAll('.selected')
	if (elSelectedCards.length === 2) return

	elCard.classList.add('selected')

	if (elSelectedCards.length === 0) return
	else elSelectedCards = document.querySelectorAll('.selected')

	if (elSelectedCards[0].innerText === elSelectedCards[1].innerText) {
		elSelectedCards.forEach(elCard => {
			elCard.classList.add('paired')
			elCard.classList.remove('selected')
		})
	} else {
		setTimeout(() => {
			elSelectedCards.forEach(elCard => elCard.classList.remove('selected'))
		}, 2000)
	}
}
