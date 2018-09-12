function Gift() {

      btn_gift.addEventListener('click', function() {
         showGift();
      });



      popup_gift.addEventListener('click', function(event) {
         let target = event.target;
         if (target.className != 'popup-content' &&
            target.parentNode.className != 'popup-content' ||
            target.className === 'popup-close') {
            popup_gift.classList.remove('show');
            // popup_gift.classList.add('hide');
         }
      });
   }
   
   module.exports = Gift;
