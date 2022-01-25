let isOpen = false



document.getElementById('year').innerHTML = new Date().getFullYear();

toggleBtn.addEventListener('click', () => {
	if (!isOpen) {
		openMenu()
	} else {
		closeMenu()
	}
})

let openMenu = () => {
	isOpen = true
	menu.style.transform = 'translateY(0)'
	toggleBtn.style.transform = 'rotate(360deg)'
	toggleBtn.innerText = 'X'
} 

let closeMenu = () => {
	isOpen = false
	menu.style.transform = 'translateY(-200%)'
	toggleBtn.style.transform = 'rotate(0deg)'
	toggleBtn.innerText = '☰'
}
