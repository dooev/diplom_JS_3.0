function Gift() {
   var btn_gift = document.querySelector('.fixed-gift'),
       popup_gift = document.querySelector('.popup-gift');
   btn_gift.addEventListener('click', function () {
      popup_gift.classList.add('show');
      popup_gift.classList.remove('hide');
      btn_gift.classList.remove('infinite');
      btn_gift.classList.remove('pulse');
      setTimeout(function () {
         btn_gift.classList.add('hide');
      }, 500);
   });

   popup_gift.addEventListener('click', function (event) {
      var target = event.target;
      if (target.className != 'popup-content' && target.parentNode.className != 'popup-content' || target.className === 'popup-close') {
         popup_gift.classList.remove('show');
         // popup_gift.classList.add('hide');
      }
   });
}
   module.exports = Gift;
