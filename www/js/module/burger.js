function burger () {

   let //style = getComputedStyle(html),
      width = document.body.offsetWidth,
      burger =  document.querySelector('.burger'),
      burger_menu = document.querySelector('.burger-menu');
   
   if ((+width) > 768) {
      
         burger.classList.add('bad-width');
      } 

   burger.addEventListener('click', function() {
      if (burger.classList.contains('bad-width')) {
      } 
      else {  
         burger_menu.classList.toggle('show');
      }
   });
   
   window.addEventListener("resize", function(){
      let style = getComputedStyle(html),
         width = style.width.replace(/px/, '');

      if ((+width) < 768) {
         burger.classList.remove('bad-width');
      } 
      else {
         burger_menu.classList.remove('show');
         burger.classList.add('bad-width');
      }
   });

}

   module.exports = burger;
