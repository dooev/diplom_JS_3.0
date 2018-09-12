 function showDesign() {

      let // btn_design = document.querySelectorAll('.button-design'),
         
         popup_content = document.querySelectorAll('.popup-content')[2],
         popup_designDivS = [popup_content, popup_design];


      document.addEventListener('click', function(event) {
         let target = event.target;
         // show(target, /button-design/g, popup_design);
         if (/button-design/g.test(target.className)) {
            popup_design.classList.add('show');
            popup_design.classList.remove('hide');
         }
      });

      // hide (popup_designDivS, popup_design );
      for (let i = 0; i < popup_designDivS.length; i++) {
         popup_designDivS[i].addEventListener('click', function(event) {
            let target = event.target;
            if (target.className === 'popup-close') {
               popup_design.classList.remove('show');
               popup_design.classList.add('hide');
            } else if (this.className === 'popup-content') {
               popup_design.classList.remove('hide');
               popup_design.classList.add('show');
            } else {
               popup_design.classList.remove('show');
               popup_design.classList.add('hide');
            }
         }, true);
      }

   }
   module.exports = showDesign;
   