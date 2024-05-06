var FontFaceObserver = require('fontfaceobserver')
export function loadFont() {
	var mainFont = new FontFaceObserver('Poppins')
	var Playfair_Display = new FontFaceObserver('Playfair Display')

	var html = document.documentElement

	if (html.classList.contains('fonts-loading')) {
		Promise.all([mainFont.load(), Playfair_Display.load()])
			.then(function () {
				html.classList.remove('fonts-loading')
				html.classList.add('fonts-loaded')
				sessionStorage.fontsLoaded = true // Загружаем в кэш
			})
			.catch(function () {
				html.classList.remove('fonts-loading')
				html.classList.add('fonts-failed')
				sessionStorage.fontsLoaded = false
			})
	}
}
