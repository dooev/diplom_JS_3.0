function showConsult() {

   let // btn_consult = document.querySelectorAll('.button-consultation'),
      popup_consult = document.querySelector('.popup-consultation'),
      popup_content = document.querySelectorAll('.popup-content')[0],
      popup_consultDivS = [popup_content, popup_consult];

   document.addEventListener('click', function(event) {
      let target = event.target;
      // show(target, /button-consultation/g, popup_consult);
      if (/button-consultation/g.test(target.className)) {
         popup_consult.classList.add('show');
      }
   });

   // hide (popup_consultDivS, popup_consult );
   for (let i = 0; i < popup_consultDivS.length; i++) {
      popup_consultDivS[i].addEventListener('click', function(event) {
         let target = event.target;
         if (target.className === 'popup-close') {
            popup_consult.classList.remove('show');
            popup_consult.classList.add('hide');
         } else if (this.className === 'popup-content') {
            popup_consult.classList.remove('hide');
            popup_consult.classList.add('show');
         } else {
            popup_consult.classList.remove('show');
            popup_consult.classList.add('hide');
         }
      }, true);
   }
   // открытие через 60 сек
   setTimeout(function() {
      if (popup_design.classList.contains('hide') && popup_gift.classList.contains('hide')) {
         popup_consult.classList.add('show');
      }
   }, 60000);
}
module.exports = showConsult;