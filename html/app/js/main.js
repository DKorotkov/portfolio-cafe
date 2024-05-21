import { loadFont } from './modules/_fonts.js';
import 'focus-visible'; //Скрипт полифил для корректной работы не стадартного фокуса (focus-visible)
import { ModalDK } from './modules/_modal.js';
import { SchemeSwitcher } from './modules/sheme-switcher.js';
// import FormValid from "./modules/_formValidation" // Загрузка класса Валидации форм - FormValid.init()
// import { Accordion, AccordionBtn } from './modules/_accordion' // Загузка класса Аккардион
// import SelectDk from './modules/_select' //Загрузка класса кастомизации Select SelectDK.init();
// import EventTouch from './modules/_eventTouch' // Загрузка класса Событий "касаний"
// import ScrollBtns from './modules/_scrollButtons' // Загрузка класс управления списком элемтов с прокруткой
// import './modules/_disableScroll' //Загрузка класса "Запрета прокрутки"
// import './modules/_inputPhone.js' //Загрузка маски для телефона
loadFont();
let noda = new ModalDK({
    selector: '.nav',
    openBtnsSelector: [".hamburger"],
    focusTrap: false,
});
// video
const quoteVideo = document.querySelector('.quote__video');
const qutoeVideoIcon = document.querySelector('.quote__video-icon');
const playQuoteVideo = () => {
    if (quoteVideo.paused) {
        quoteVideo.play();
        qutoeVideoIcon.style.opacity = '0';
    }
    else {
        quoteVideo.pause();
        qutoeVideoIcon.style.opacity = '100';
    }
};
if (quoteVideo) {
    quoteVideo.addEventListener('click', playQuoteVideo);
    qutoeVideoIcon.addEventListener('click', playQuoteVideo);
    quoteVideo.addEventListener('ended', () => {
        qutoeVideoIcon.style.opacity = '100';
    });
}
// scheme switcher
const schemeSwitcherEl = document.querySelector('.scheme-switcher');
const schemeSwitcher = new SchemeSwitcher({
    el: schemeSwitcherEl
});
//menu-fliter
const menuFilter = document.querySelector('.menu-fliter');
if (menuFilter) {
    const className = 'menu__el-hide';
    const menuFilters = menuFilter.querySelectorAll('.menu-fliter__input');
    const menuItems = document.querySelectorAll('.menu__item');
    const filter = (filterType) => {
        if (menuItems) {
            menuItems.forEach(item => {
                if (filterType === 'all' || item.dataset.type === filterType)
                    item.parentElement.classList.remove(className);
                if (item.dataset.type !== filterType && filterType !== 'all')
                    item.parentElement.classList.add(className);
            });
        }
    };
    menuFilters.forEach(item => {
        item.addEventListener('change', (e) => {
            const curEl = e.target;
            filter(curEl.value);
        });
    });
}
