import { loadFont } from './modules/_fonts.js'
import 'focus-visible' //Скрипт полифил для корректной работы не стадартного фокуса (focus-visible)
import { ModalDK } from './modules/_modal.js'
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
	focusTrap: true, 
})
