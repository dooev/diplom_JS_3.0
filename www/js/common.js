window.addEventListener('DOMContentLoaded', function(){



  function showGift(){

  let btn_gift = document.querySelector('.fixed-gift');
      popup_gift = document.querySelector('.popup-gift');

  btn_gift.addEventListener('click', function(){
    popup_gift.classList.add('show');
    // popup_gift.classList.remove('hide');
    btn_gift.classList.remove('infinite');
    btn_gift.classList.remove('pulse');
    setTimeout(function() { btn_gift.classList.add('hide') }, 500);
  
  });

  popup_gift.addEventListener('click', function(event){
    let target = event.target;
    if (target.className != 'popup-content' && target.parentNode.className != 'popup-content' || target.className === 'popup-close') {
      console.log("target.className", target.className);
      popup_gift.classList.remove('show');
      // popup_gift.fadeOut(600);
      // popup_gift.classList.add('hide');
    }
  });
  };
  showGift();

});