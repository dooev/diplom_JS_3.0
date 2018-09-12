
// Global START
   //переменные
   let btn_gift = document.querySelector('.fixed-gift'),
      popup_gift = document.querySelector('.popup-gift'),
      html = document.querySelector('html'),
      popup_design = document.querySelector('.popup-design');
      //style = getComputedStyle(html);
   // функции
   function showGift() {
      popup_gift.classList.add('show');
      popup_gift.classList.remove('hide');
      btn_gift.classList.remove('infinite');
      btn_gift.classList.remove('pulse');
      setTimeout(function() {
         btn_gift.classList.add('hide');
      }, 500);
   }
// Global END  

// подключение модулей
   let Gift = require('../module/Gift.js');
   let showDesign = require('../module/showDesign.js');
   let showMoreStyle = require('../module/showMoreStyle.js');
   let showConsult = require('../module/showConsult.js');
   let blockFilter = require('../module/blockFilter.js');
   let ajax = require('../module/ajax.js');
   let onHover = require('../module/onHover.js');
   let calc = require('../module/calc.js');
   let slider = require('../module/slider.js');
   let accordion = require('../module/accordion.js');
   let burger = require('../module/burger.js');
   let showModalOnEnd = require('../module/showModalOnEnd.js');

   
window.addEventListener('DOMContentLoaded', function() {
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

}); // GENERAL END 




//  START 

//  END