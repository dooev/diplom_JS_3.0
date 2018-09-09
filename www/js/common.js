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
         popup_content = document.querySelectorAll('.popup-content')[2],
         popup_designDivS = [popup_content, popup_design];


      document.addEventListener('click', function(event) {
         let target = event.target;
         // show(target, /button-design/g, popup_design);
         if (/button-design/g.test(target.className)) {
            popup_design.classList.add('show');
         }
      });

      // hide (popup_designDivS, popup_design );
      for (var i = 0; i < popup_designDivS.length; i++) {
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

   showDesign();
   // showDesign END Модальные окна popup-design 

   // showMoreStyle START Подгрузка блоков
   function showMoreStyle() {
      let btnMoreStyle = document.querySelector('.button-transparent'),
         blockMoreStyle = document.querySelectorAll('.styles-2');

      btnMoreStyle.addEventListener('click', function() {
         for (var i = 0; i < blockMoreStyle.length; i++) {
            blockMoreStyle[i].classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs', 'styles-2');
            blockMoreStyle[i].classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            btnMoreStyle.classList.add('hide');

         }
      });
   }
   showMoreStyle();
   // showMoreStyle END Подгрузка блоков

   // showConsult START Модальные окна popup-consultation
   function showConsult() {

      let btn_consult = document.querySelectorAll('.button-consultation'),
         popup_consult = document.querySelector('.popup-consultation'),
         popup_content = document.querySelectorAll('.popup-content')[0],
         popup_consultDivS = [popup_content, popup_consult];

      document.addEventListener('click', function(event) {
         let target = event.target;
         // show(target, /button-consultation/g, popup_consult);
         if (/button-consultation/g.test(target.className)) {
            popup_consult.classList.add('show');
         }
      });

      // hide (popup_consultDivS, popup_consult );
      for (var i = 0; i < popup_consultDivS.length; i++) {
         popup_consultDivS[i].addEventListener('click', function(event) {
            let target = event.target;
            if (target.className === 'popup-close') {
               popup_consult.classList.remove('show');
               popup_consult.classList.add('hide');
            } else if (this.className === 'popup-content') {
               popup_consult.classList.remove('hide');
               popup_consult.classList.add('show');
            } else {
               popup_consult.classList.remove('show');
               popup_consult.classList.add('hide');
            }
         }, true);
      }

   }

   showConsult();
   // showConsult END Модальные окна popup-consultation

   //  START Фильтрация блоков
   function blockFilter() {
      let blockPortfol = document.querySelector('.portfolio'),
         btnS_Portfol = blockPortfol.querySelectorAll('li'),
         blockS_Portfol = blockPortfol.querySelectorAll('.portfolio-block'),
         portfol_no_block = blockPortfol.querySelector('.portfolio-no');
      // акнивная кнопка
      for (var i = 0; i < btnS_Portfol.length; i++) {
         btnS_Portfol[i].addEventListener('click', function() {
            for (var i = 0; i < btnS_Portfol.length; i++) {
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
   blockFilter();
   //  END Фильтрация блоков


   // formsValid START Формы в модальных окнах
   function ajax() {

      let formS = document.getElementsByTagName('form'),
         btnSubmit = document.querySelectorAll('button[type=submit]'),
         formDesign = formS[3],
         btnDesign = btnSubmit[3],
         inputPopup = formDesign.getElementsByTagName('input'),
         formConsult = formS[2],
         btnConsult = btnSubmit[2],
         inputConsult = formConsult.getElementsByTagName('input'),
         formMain = formS[1],
         btnMain = btnSubmit[1],
         inputMain = formConsult.getElementsByTagName('input'),
         // inputS = [inputPopup, inputConsult[0], inputConsult[1]],
         statusMessage = document.createElement('div'),
         statusMessageLoad = document.createElement('IMG'),
         statusMessageOk = document.createElement('IMG');
      statusMessageLoad.classList.add('status-img');
      statusMessageLoad.src = "img/ajax-loader.GIF";
      statusMessageOk.src = "img/success.SVG";
      statusMessage.classList.add('status');
      // валидация
      let inputPhone = document.querySelectorAll('input[name="phone"]'),
         inputName = document.querySelectorAll('input[name="name"]'),
         inputMail = document.querySelectorAll('input[name="email"]'),
         inputMessage = document.querySelectorAll('input[name="message"]');

      validator(inputPhone, '^[+][0-9] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$', '+7-999-999-99-99');
      validator(inputName, '^[А-Яа-я]+$', 'Введите имя на русском');
      validator(inputMail, '^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$', 'введите почту');
      validator(inputMessage, '^[А-Яа-я]+$', 'Введите комментарий на русском');

      function validator(inputsArr, regExpr, plaseholder) {
         for (var i = 0; i < inputPhone.length; i++) {
            inputsArr[i].setAttribute("pattern", regExpr);
            inputsArr[i].setAttribute("placeholder", plaseholder);
         }
      }

      // отправка формы
      var status = new Object();
      status.ok = ' \u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430, \u043C\u044B \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C \u0412\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 10 \u043C\u0438\u043D\u0443\u0442';
      status.load = ' \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...';
      status.fail = "Что то пошло не так... Отправьте форму еще раз, пожалуйста";


      var toServer = {
         // Создаем объект с методом отправки данных на сервер
         Go: function Go(event) {
            var _this = this;
            for (var i = 0; i < inputConsult.length; i++) {
               _this[i].classList.remove('hide');
               _this.classList.add('show');
            }

            // В качестве аргумента передаем контекст вызова

            event = event.preventDefault();
            var formData = new FormData(this);

            function postData(data) {
               return new Promise(function(resolve, reject) {
                  var request = new XMLHttpRequest();

                  request.open('POST', 'server.php');

                  request.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded');

                  request.onreadystatechange = function() {
                     if (request.readyState < 4) {
                        resolve();
                     } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 300) {
                           // коды ошибок
                           resolve();
                        } else {
                           reject();
                        }
                     }
                  };

                  request.send(formData);
               });
            } // END postData

            function clearInput() {
               //    for (var i = 0; i < inputS.length; i++) {
               //       inputS[i].value = ''; // очищаем поля ввода
               //    }
            }

            postData(formData).then(function() {
               _this.appendChild(statusMessageLoad);
               _this.appendChild(statusMessage);
               statusMessage.innerHTML = status.load;
            }).then(function() {
               _this.removeChild(statusMessageLoad);
               _this.removeChild(statusMessage);
               for (let i = 0; i < _this.length; i++) {
                  _this[i].classList.add('hide');
                  _this[i].classList.remove('show');
               }
               _this.appendChild(statusMessageOk);
               _this.appendChild(statusMessage);
               statusMessage.innerHTML = status.ok;
               statusMessageOk.style.maxHeight = '100px';

            }).catch(function() {
               _this.removeChild(statusMessageLoad);
               _this.removeChild(statusMessageOk);
               statusMessage.innerHTML = status.fail;
            }).then(clearInput);
         } // END Go метод объекта

      }; // END toServer object

      formDesign.addEventListener('submit', toServer.Go);
      formConsult.addEventListener('submit', toServer.Go);
      formMain.addEventListener('submit', toServer.Go);

   }
   ajax();
   // module.exports = ajax;
   // formsValid END Формы в модальных окнах




}); // GENERAL END 

// For All START

//переменные
// let popup_content = document.querySelectorAll('.popup-content');

// функции
// function show(target, regExpr, classToShow) {
//    if (regExpr.test(target.className)) {
//       classToShow.classList.add('show');
//    }
// };

// function hide (divS, popupClassName, ) {
//    for (var i = 0; i < divS.length; i++) {
//       divS[i].addEventListener('click', function(event) {
//          let target = event.target;
//          if (target.className === 'popup-close') {
//             popupClassName.classList.remove('show');
//             popupClassName.classList.add('hide');
//          } else if (this.className === 'popup-content') {
//             popupClassName.classList.remove('hide');
//             popupClassName.classList.add('show');
//          } else {
//             popupClassName.classList.remove('show');
//             popupClassName.classList.add('hide');
//          }
//       }, true);
//    }
// }

// For All END  



//  START

//  END