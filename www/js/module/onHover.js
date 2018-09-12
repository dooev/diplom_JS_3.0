function onHover () {

   let sizeSmall = document.querySelector('.size-1'),
       sizeMed = document.querySelector('.size-2'),
       sizeLar = document.querySelector('.size-3'),
       sizeXL = document.querySelector('.size-4');
   
   change(sizeSmall);
   change(sizeMed);
   change(sizeLar);
   change(sizeXL);
   
   function change (element) {

      element.onmouseenter = function (event){
         
         let target = event.target,
            attr = target.getAttribute('src'),
            newSrc = attr.replace(/.png/, "-1.png");
         
         if (attr.length == 15)  {            
            target.setAttribute('src', newSrc);
         }
      };

      element.onmouseleave = function (event) {
         
         let target = event.target,
            attr = target.getAttribute('src'),
            newSrc = attr.replace(/-1.png/, ".png");

         if (attr.length > 15)  { 
            target.setAttribute('src', newSrc);
         }
      };
   }
}

   module.exports = onHover;
