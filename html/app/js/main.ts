import { loadFont } from './modules/_fonts.js'
import 'focus-visible' //Скрипт полифил для корректной работы не стадартного фокуса (focus-visible)
import { ModalDK } from './modules/_modal.js'
import { SchemeSwitcher } from './modules/sheme-switcher.js'
// import FormValid from "./modules/_formValidation" // Загрузка класса Валидации форм - FormValid.init()
// import { Accordion, AccordionBtn } from './modules/_accordion' // Загузка класса Аккардион
// import SelectDk from './modules/_select' //Загрузка класса кастомизации Select SelectDK.init();
// import EventTouch from './modules/_eventTouch' // Загрузка класса Событий "касаний"
// import ScrollBtns from './modules/_scrollButtons' // Загрузка класс управления списком элемтов с прокруткой
// import './modules/_disableScroll' //Загрузка класса "Запрета прокрутки"
// import './modules/_inputPhone.js' //Загрузка маски для телефона

loadFont() 

let noda = new ModalDK({
	selector: '.nav',
   openBtnsSelector: [".hamburger"],
	focusTrap: false, 
})


// video
const quoteVideo = document.querySelector('.quote__video') as HTMLVideoElement

const qutoeVideoIcon = document.querySelector('.quote__video-icon') as HTMLElement

const playQuoteVideo = () => {
	if (quoteVideo.paused ) { 
		quoteVideo.play()
		qutoeVideoIcon.style.opacity = '0'
	}
	else {
		quoteVideo.pause()
		qutoeVideoIcon.style.opacity = '100'
	}
}

quoteVideo.addEventListener('click', playQuoteVideo)
qutoeVideoIcon.addEventListener('click', playQuoteVideo)

quoteVideo.addEventListener('ended', ()=>{
	qutoeVideoIcon.style.opacity = '100'
})

// scheme switcher
const schemeSwitcherEl = document.querySelector('.scheme-switcher')

const schemeSwitcher = new SchemeSwitcher({
	el: schemeSwitcherEl
})
