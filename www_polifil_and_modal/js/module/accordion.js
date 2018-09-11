function accordion() {

   var btnAcc = document.querySelectorAll('.accordion-heading'),
       blockAcc = document.querySelectorAll(".accordion-block");

   for (var i = 0; i < blockAcc.length; i++) {
      blockAcc[i].style.display = 'none';
   }

   var _loop2 = function _loop2(_i8) {

      btnAcc[_i8].addEventListener('click', function () {

         for (var q = 0; q < btnAcc.length; q++) {
            btnAcc[q].classList.remove('ui-accordion-header-active');
            this.classList.add('ui-accordion-header-active');

            if (btnAcc[q].classList.contains('ui-accordion-header-active')) {

               blockAcc[q].style.display = 'block';
               blockAcc[q].style.opacity = 0;
               opacity(blockAcc[_i8], 50, 1);
            } else {
               blockAcc[q].style.display = 'none';
            }
         }
      });
   };

   for (var _i8 = 0; _i8 < btnAcc.length; _i8++) {
      _loop2(_i8);
   }
}
// анимация
function opacity(element, speed, max_opac) {
   var I = window.setInterval(function () {
      if (+element.style.opacity > max_opac || !element.style.opacity) {
         element.style.opacity = 1;window.clearInterval(I);
      } else {
         element.style.opacity = +element.style.opacity + 0.08;
      }
   }, speed);
}
   module.exports = accordion;
