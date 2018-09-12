function slider() {
   var MslideIndex = 1,
       FslideIndex = 1,
       slideSFooter = document.querySelectorAll('.feedback-slider-item'),
       slideSMain = document.querySelectorAll('.main-slider-item-img'),
       prev = document.querySelector('.main-prev-btn'),
       next = document.querySelector('.main-next-btn');

   setInterval(mainSlideR, 5000);
   // на главном экране
   function mainSlideR() {
      if (MslideIndex == 1) {
         slideSMain[1].classList.remove('move');
         slideSMain[1].classList.remove('show');
         slideSMain[1].classList.add('hide');
         slideSMain[0].classList.remove('hide');
         slideSMain[0].classList.add('show');
         slideSMain[0].classList.add('move');

         MslideIndex++;
      } else {
         MslideIndex--;
         slideSMain[0].classList.remove('move');
         slideSMain[1].classList.remove('hide');
         slideSMain[1].classList.add('show');
         slideSMain[1].classList.add('move');
         slideSMain[0].classList.add('hide');
         slideSMain[0].classList.remove('show');
      }
   }
   mainSlideR();

   function footerSlideR(n) {
      if (n > slideSFooter.length) {
         FslideIndex = 1;
      }
      if (n < 1) {
         FslideIndex = slideSFooter.length;
      }
      for (var i = 0; i < slideSFooter.length; i++) {
         slideSFooter[i].style.display = 'none';
      }
      slideSFooter[FslideIndex - 1].style.display = 'block';

   }
   footerSlideR(FslideIndex);

   var indexArrowPress = 0;
   function auto() {
      if (indexArrowPress === 0){
         plusSlide(1);
         slideSFooter[FslideIndex - 1].classList.add('nextSlide');
      } else{ 
         clearInterval(timer);
      }
   }
   function timer(){
      setInterval(auto, 3000);
   }
   timer(); 
   function plusSlide(n) {
      footerSlideR(FslideIndex += n);
   }
   //function currentSlide(n) {
   // footerSlideR(FslideIndex = n);
   // }

   prev.addEventListener('click', function () {
      indexArrowPress = 1;
      plusSlide(-1);
      slideSFooter[FslideIndex - 1].classList.add('prevSlide');
   });

   next.addEventListener('click', function () {
      indexArrowPress = 1;
      plusSlide(1);
      slideSFooter[FslideIndex - 1].classList.add('nextSlide');
   });

}
   module.exports = slider;
