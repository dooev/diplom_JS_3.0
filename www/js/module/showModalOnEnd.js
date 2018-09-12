function showModalOnEnd (){

   let heightFull = Math.max(
       document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight),
      btnAll = document.querySelectorAll('button'),
      btnClickIndex = 0;

      for (let i = 0; i < btnAll.length; i++) {
         btnAll[i].addEventListener('click', function() {
            btnClickIndex++;
         });
      }

   window.addEventListener("scroll", function(){

      let heightWindow = document.documentElement.clientHeight,
         heightScroll = window.pageYOffset || document.documentElement.scrollTop,
         userScroll = heightWindow + heightScroll + '';
         userScroll = userScroll.substring(0,5);
         userScroll = +userScroll;

      // console.log("heightAll", heightFull);
         // console.log("heightScroll", heightScroll);

      // console.log("Full = Scroll + Window", userScroll);
  
      if (btn_gift.classList.contains('hide')) {
      }
      else if(btnClickIndex < 1){
         if (heightFull === userScroll || heightFull === (++userScroll) || 
            heightFull === (--userScroll)) {
            showGift();
         }
      }
   });

}

   module.exports = showModalOnEnd;
