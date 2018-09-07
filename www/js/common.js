window.addEventListener('DOMContentLoaded', function() {


   // Gift START Модальное окно с подарком
   function showGift() {

      let btn_gift = document.querySelector('.fixed-gift'),
         popup_gift = document.querySelector('.popup-gift');

      btn_gift.addEventListener('click', function() {
         popup_gift.classList.add('show');
         // popup_gift.classList.remove('hide');
         btn_gift.classList.remove('infinite');
         btn_gift.classList.remove('pulse');
         setTimeout(function() { 
            btn_gift.classList.add('hide'); 
         }, 500);
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
   showGift();
   // Gift END Модальное окно с подарком

   // showDesign START Модальные окна popup-design 
   // function showDesign() {
     
   //    let btn_design = document.querySelectorAll('.button-design'),
   //        popup_design = document.querySelector('.popup-design');

   //    document.addEventListener('click', function(event) {
   //       let target = event.target;
   //       if (hasClassName(target, 'n-d') ) {
   //          popup_design.classList.add('show');
   //       } else if ( !hasClassName(target, 'popup-content') && 
   //          !hasClassName(target, 'popup-content').parentNode || target.className === 'popup-close'){
   //          popup_design.classList.remove('show');

   //       }
   //    });

      // popup_design.addEventListener('click', function(event) {
      //    let target = event.target;
      //    if (target.className != 'popup-dialog' && 
      //       target.parentNode.className != 'popup-dialog' ||
      //        target.className === 'popup-close') {
      //       popup_design.classList.remove('show');
      //       popup_design.classList.add('hide');
      //    }
      // });
   // }
   // showDesign();
   // showDesign END Модальные окна popup-design 

   // For All START
   // function hasClassName(elem, cl) {
   //   return (new RegExp('^|\s' + cl + '\s|$')).test(elem.className);
   // }


   // function showPopup(className, popupName) {
   
   //       let target = event.target;
   //       if (hasClassName(target, className)) {
   //          popupName.classList.add('show');
   //       }
   //    });


   // }

   // btn_design.addEventListener('click', showPopup(event 'des', popup_design));



   // function hidePopup(namePopup, classPopup){
   //    document.addEventListener('click', function(event) {
   //       let target = event.target;
   //       if (target.className != 'popup-content' && 
   //           target.parentNode.className != 'popup-content' ||
   //           target.className === 'popup-close') {
   //           namePopup.classList.remove('show');
   //       // popup_gift.classList.add('hide');
   //       }
   //    });
   // }
      // hidePopup(popup_gift, 'popup-content');

   // For All END  

   //  START
   //  END
});
//  START
//  END