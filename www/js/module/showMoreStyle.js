function showMoreStyle() {
   let btnMoreStyle = document.querySelector('.button-transparent'),
      blockMoreStyle = document.querySelectorAll('.styles-2');

   btnMoreStyle.addEventListener('click', function() {
      for (let i = 0; i < blockMoreStyle.length; i++) {
         blockMoreStyle[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
         blockMoreStyle[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
         btnMoreStyle.classList.add('hide');

      }
   });
}

   module.exports = showMoreStyle;
