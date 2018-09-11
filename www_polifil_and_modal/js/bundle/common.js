window.addEventListener('DOMContentLoaded', function() {

// подключение модулей
// Gift START Модальное окно с подарком
let Gift = require('./Gift.js');
// showDesign START Модальные окна popup-design 
let showDesign = require('./showDesign.js');
// showMoreStyle START Подгрузка блоков
let showMoreStyle = require('./showMoreStyle.js');
// showConsult START Модальные окна popup-consultation
let showConsult = require('./showConsult.js');
//  START Фильтрация блоков
let blockFilter = require('./blockFilter.js');
// formsValid START Формы в модальных окнах
let ajax = require('./ajax.js');
// onHover START Картинки при наведении
let onHover = require('./onHover.js');
// calc START Калькулятор
let calc = require('./calc.js');
// sliderS START слайдерЫ
let slider = require('./slider.js');
//  START Аккордеон
let accordion = require('./accordion.js');
//  START Гамбургер-меню
let burger = require('./burger.js');
//  START Модальное окно при пролистывании
let showModalOnEnd = require('./showModalOnEnd.js');

   // вызов функций
   Gift();
   showDesign();
   showMoreStyle();
   showConsult();
   blockFilter();
   ajax();
   onHover();
   calc();
   slider();
   accordion();
   burger();
   showModalOnEnd();

}); // DOMContentLoaded END 


//  START 

//  END