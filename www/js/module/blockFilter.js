function blockFilter() {
   let blockPortfol = document.querySelector('.portfolio'),
      btnS_Portfol = blockPortfol.querySelectorAll('li'),
      blockS_Portfol = blockPortfol.querySelectorAll('.portfolio-block'),
      portfol_no_block = blockPortfol.querySelector('.portfolio-no');
   // акнивная кнопка
   for (let i = 0; i < btnS_Portfol.length; i++) {
      btnS_Portfol[i].addEventListener('click', function() {
         for (let i = 0; i < btnS_Portfol.length; i++) {
            btnS_Portfol[i].classList.remove('active');
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
            for (let i = 0; i < blockS_Portfol.length; i++) {
               if (blockS_Portfol[i].classList.contains(NameClass)) {
                  blockS_Portfol[i].classList.add('show');
               } else {
                  blockS_Portfol[i].classList.remove('show');
                  blockS_Portfol[i].classList.add('hide');
                  portfol_no_block.classList.remove('show');

               }
               // для бабушек и дедушек
               if (thisBtn.classList.contains('grandmother') ||
                  thisBtn.classList.contains('granddad')) {
                  portfol_no_block.classList.add('show');
                  for (let i = 0; i < blockS_Portfol.length; i++) {
                     blockS_Portfol[i].classList.remove('show');
                     blockS_Portfol[i].classList.add('hide');
                  }
               }
            }
         }
      }
   }
}

   module.exports = blockFilter;
