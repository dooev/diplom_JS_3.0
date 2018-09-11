function blockFilter() {
   var blockPortfol = document.querySelector('.portfolio'),
       btnS_Portfol = blockPortfol.querySelectorAll('li'),
       blockS_Portfol = blockPortfol.querySelectorAll('.portfolio-block'),
       portfol_no_block = blockPortfol.querySelector('.portfolio-no');
   // акнивная кнопка

   var _loop = function _loop(i) {
      btnS_Portfol[i].addEventListener('click', function () {
         for (var _i = 0; _i < btnS_Portfol.length; _i++) {
            btnS_Portfol[_i].classList.remove('active');
         }
         this.classList.toggle('active');

         showBlockPortfol('all', this);
         showBlockPortfol('lovers', this);
         showBlockPortfol('chef', this);
         showBlockPortfol('girl', this);
         showBlockPortfol('guy', this);
         showBlockPortfol('grandmother', this);
         showBlockPortfol('granddad', this);
      });

      function showBlockPortfol(NameClass, thisBtn) {
         if (thisBtn.classList.contains(NameClass)) {
            for (var _i2 = 0; _i2 < blockS_Portfol.length; _i2++) {
               if (blockS_Portfol[_i2].classList.contains(NameClass)) {
                  blockS_Portfol[_i2].classList.add('show');
               } else {
                  blockS_Portfol[_i2].classList.remove('show');
                  blockS_Portfol[_i2].classList.add('hide');
                  portfol_no_block.classList.remove('show');
               }
               // для бабушек и дедушек
               if (thisBtn.classList.contains('grandmother') || thisBtn.classList.contains('granddad')) {
                  portfol_no_block.classList.add('show');
                  for (var _i3 = 0; _i3 < blockS_Portfol.length; _i3++) {
                     blockS_Portfol[_i3].classList.remove('show');
                     blockS_Portfol[_i3].classList.add('hide');
                  }
               }
            }
         }
      }
   };

   for (var i = 0; i < btnS_Portfol.length; i++) {
      _loop(i);
   }
}
   module.exports = blockFilter;
