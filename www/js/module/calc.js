function calc () {

   let size = document.querySelector('#size'), // select
      material = document.querySelector('#material'), // select
      options = document.querySelector('#options'), // select
      promo = document.querySelector('.promocode'),
      total = 0,
      totalValue = document.querySelector('.calc-price');

     size.addEventListener('change', function(){   plus(); });
     material.addEventListener('change', function(){   plus(); });
     options.addEventListener('change', function(){ plus(); });
     promo.addEventListener('change', function(){   plus(); });

      function plus(){
         if (size.value != '0' && material.value !='0') {
            total =+ (+size.value) + (+material.value) + (+options.value);
            if ( promo.value == 'IWANTPOPART') {
               total = total * 0.7;
            }
            totalValue.innerHTML = total;
         } 
         else {
            totalValue.innerHTML = 0;

         }
      }
}

   module.exports = calc;
