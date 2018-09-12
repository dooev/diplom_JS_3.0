function accordion () {

   let btnAcc = document.querySelectorAll('.accordion-heading'),
      blockAcc = document.querySelectorAll(".accordion-block");

   for (let i = 0; i < blockAcc.length; i++) {
      blockAcc[i].style.display = 'none';
   }

   for (let i = 0; i < btnAcc.length; i++) {
     
      btnAcc[i].addEventListener('click', function(){

         for (let q = 0; q < btnAcc.length; q++) {
            btnAcc[q].classList.remove('ui-accordion-header-active');
            this.classList.add('ui-accordion-header-active');

            if (btnAcc[q].classList.contains('ui-accordion-header-active') ) {
               
               blockAcc[q].style.display = 'block';
               blockAcc[q].style.opacity = 0;
               opacity(blockAcc[i],50,1);
            }
            else { 
               blockAcc[q].style.display = 'none';
            }
         }

      });
   }  
}
// анимация
function opacity(element, speed, max_opac){
  let I=window.setInterval(function(){
        if(+element.style.opacity>max_opac||!element.style.opacity){
            element.style.opacity = 1; window.clearInterval(I);
        }
        else {
            element.style.opacity = +element.style.opacity + 0.08;
      }
      
    }, speed);
}

   module.exports = accordion;
