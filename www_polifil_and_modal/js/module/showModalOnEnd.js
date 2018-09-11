function showModalOnEnd() {

   var btn_gift = document.querySelector('.fixed-gift'),
       popup_gift = document.querySelector('.popup-gift'),
       heightFull = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
       btnAll = document.querySelectorAll('button'),
       btnClickIndex = 0;

   for (var i = 0; i < btnAll.length; i++) {
      btnAll[i].addEventListener('click', function () {
         btnClickIndex++;
      });
   }

   window.addEventListener("scroll", function () {

      var heightWindow = document.documentElement.clientHeight,
          heightScroll = window.pageYOffset || document.documentElement.scrollTop,
          userScroll = heightWindow + heightScroll + '';
      userScroll = userScroll.substring(0, 5);
      userScroll = +userScroll;

      // console.log("heightAll", heightFull);
      // console.log("heightScroll", heightScroll);

      // console.log("Full = Scroll + Window", userScroll);

      if (btn_gift.classList.contains('hide')) {} else if (btnClickIndex < 1) {
         if (heightFull === userScroll || heightFull === ++userScroll || heightFull === --userScroll) {
            showGift();
         }
      }
   });
   function showGift() {
      popup_gift.classList.add('show');
      popup_gift.classList.remove('hide');
      btn_gift.classList.remove('infinite');
      btn_gift.classList.remove('pulse');
      setTimeout(function () {
         btn_gift.classList.add('hide');
      }, 500);
   }
}
   module.exports = showModalOnEnd;
