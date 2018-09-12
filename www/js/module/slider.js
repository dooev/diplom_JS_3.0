function slider () {
   let MslideIndex = 1,
       FslideIndex = 1,
      slideSFooter = document.querySelectorAll('.feedback-slider-item'),
      slideSMain = document.querySelectorAll('.main-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn');

      setInterval(mainSlideR, 5000);
// на главном экране
   function mainSlideR (){ 
         if (MslideIndex == 1){
            slideSMain[0].classList.add('show');
            slideSMain[0].classList.remove('hide');

            slideSMain[1].classList.add('hide');
            slideSMain[1].classList.remove('show');
            slideSMain[0].animate(animateY, {
                duration: 1000,
                fill: 'forwards'
            });
            MslideIndex++;
         }
         else {
            MslideIndex--;
            slideSMain[1].classList.add('show');
            slideSMain[1].classList.remove('hide');

            slideSMain[0].classList.add('hide');
            slideSMain[0].classList.remove('show');
            slideSMain[1].animate(animateY, {
                duration: 1000,
                fill: 'forwards'
            });
         }
   }
   mainSlideR();

   var animateY = [
       { 
           transform: 'translateY(-700px)',
       },
       {
           transform: 'translateY(0px)',
       }
   ];

   function footerSlideR (n){ 
      if (n > slideSFooter.length){
         FslideIndex = 1;
      }
      if (n < 1) {
         FslideIndex = slideSFooter.length;
      }
      for (let i = 0; i < slideSFooter.length; i++) {
         slideSFooter[i].style.display = 'none';
      }
      slideSFooter[FslideIndex - 1].style.display = 'block';

   }
   footerSlideR(FslideIndex);

   function auto () {
      plusSlide(1);
      slideSFooter[FslideIndex - 1].animate(animateX_Right, {
         duration: 300,
         fill: 'forwards'
      });
   }
   setInterval(auto, 3000);


   function plusSlide(n) {
      footerSlideR(FslideIndex += n);
   }
   //function currentSlide(n) {
     // footerSlideR(FslideIndex = n);
  // }

   prev.addEventListener('click', function () {
      plusSlide(-1);
      slideSFooter[FslideIndex - 1].animate(animateX_Left, {
         duration: 300,
         fill: 'forwards'
      });
   });

   next.addEventListener('click', function () {
      plusSlide(1);
      slideSFooter[FslideIndex - 1].animate(animateX_Right, {
         duration: 300,
         fill: 'forwards'
      });
   });

   var animateX_Left = [
       { 
           transform: 'translateX(-400px)',
       },
       {
           transform: 'translateX(0px)',
       }
   ];

   var animateX_Right = [
       { 
           transform: 'translateX(+400px)',
       },
       {
           transform: 'translateX(0px)',
       }
   ];
}

   module.exports = slider;
