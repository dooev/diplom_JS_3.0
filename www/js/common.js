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
   function showDesign() {

      let btn_design = document.querySelectorAll('.button-design'),
         popup_design = document.querySelector('.popup-design'),
         popup_content = document.querySelectorAll('.popup-content');

      document.addEventListener('click', function(event) {
         let target = event.target;
         if (/button-design/g.test(target.className)) {
            popup_design.classList.add('show');
         }
      });

      for (var i = 0; i < popup_content.length; i++) {
         popup_content[i].addEventListener('click', function() {
            // let target = event.target;
            if (this.className === 'popup-content') {
               popup_design.classList.remove('hide');
               popup_design.classList.add('show');
            }
         });
      };
   }

   showDesign();
   // showDesign END Модальные окна popup-design 

// showMoreStyle START Подгрузка блоков
   function showMoreStyle () {
      let btnMoreStyle = document.querySelector('.button-transparent'),
          blockMoreStyle = document.querySelectorAll('.styles-2');

      btnMoreStyle.addEventListener('click', function(){
         for (var i = 0; i < blockMoreStyle.length; i++) {
            blockMoreStyle[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            blockMoreStyle[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            btnMoreStyle.classList.add('hide');

         }
      });
   }
   showMoreStyle();
// showMoreStyle END Подгрузка блоков



}); // GENERAL END 

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
//  START
//  END