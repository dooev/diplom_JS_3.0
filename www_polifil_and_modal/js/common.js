'use strict';

window.addEventListener('DOMContentLoaded', function () {

   // Global START

   //переменные
   var btn_gift = document.querySelector('.fixed-gift'),
       popup_gift = document.querySelector('.popup-gift'),
       html = document.querySelector('html'),
       popup_design = document.querySelector('.popup-design');
   //style = getComputedStyle(html);
   // функции
   function showGift() {
      popup_gift.classList.add('show');
      popup_gift.classList.remove('hide');
      btn_gift.classList.remove('infinite');
      btn_gift.classList.remove('pulse');
      setTimeout(function () {
         btn_gift.classList.add('hide');
      }, 500);
   }

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

   // Global END  

   // Gift START Модальное окно с подарком
   function Gift() {

      btn_gift.addEventListener('click', function () {
         showGift();
      });

      popup_gift.addEventListener('click', function (event) {
         var target = event.target;
         if (target.className != 'popup-content' && target.parentNode.className != 'popup-content' || target.className === 'popup-close') {
            popup_gift.classList.remove('show');
            // popup_gift.classList.add('hide');
         }
      });
   }
   Gift();
   // Gift END Модальное окно с подарком

   // showDesign START Модальные окна popup-design 
   function showDesign() {

      var // btn_design = document.querySelectorAll('.button-design'),

      popup_content = document.querySelectorAll('.popup-content')[2],
          popup_designDivS = [popup_content, popup_design];

      document.addEventListener('click', function (event) {
         var target = event.target;
         // show(target, /button-design/g, popup_design);
         if (/button-design/g.test(target.className)) {
            popup_design.classList.add('show');
            popup_design.classList.remove('hide');
         }
      });

      // hide (popup_designDivS, popup_design );
      for (var i = 0; i < popup_designDivS.length; i++) {
         popup_designDivS[i].addEventListener('click', function (event) {
            var target = event.target;
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
      var btnMoreStyle = document.querySelector('.button-transparent'),
          blockMoreStyle = document.querySelectorAll('.styles-2');

      btnMoreStyle.addEventListener('click', function () {
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

      var // btn_consult = document.querySelectorAll('.button-consultation'),
      popup_consult = document.querySelector('.popup-consultation'),
          popup_content = document.querySelectorAll('.popup-content')[0],
          popup_consultDivS = [popup_content, popup_consult];

      document.addEventListener('click', function (event) {
         var target = event.target;
         // show(target, /button-consultation/g, popup_consult);
         if (/button-consultation/g.test(target.className)) {
            popup_consult.classList.add('show');
         }
      });

      // hide (popup_consultDivS, popup_consult );
      for (var i = 0; i < popup_consultDivS.length; i++) {
         popup_consultDivS[i].addEventListener('click', function (event) {
            var target = event.target;
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
      // открытие через 60 сек
      setTimeout(function () {
         if (popup_design.classList.contains('hide') && popup_gift.classList.contains('hide')) {
            popup_consult.classList.add('show');
         }
      }, 60000);
   }

   showConsult();
   // showConsult END Модальные окна popup-consultation

   //  START Фильтрация блоков
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
   blockFilter();
   //  END Фильтрация блоков


   // formsValid START Формы в модальных окнах
   function ajax() {

      var formS = document.getElementsByTagName('form'),

      //  btnSubmit = document.querySelectorAll('button[type=submit]'),
      formDesign = formS[3],

      // btnDesign = btnSubmit[3],
      // inputPopup = formDesign.getElementsByTagName('input'),
      formConsult = formS[2],

      // btnConsult = btnSubmit[2],
      inputConsult = formConsult.getElementsByTagName('input'),
          formMain = formS[1],

      // btnMain = btnSubmit[1],
      // inputMain = formConsult.getElementsByTagName('input'),
      // inputS = [inputPopup, inputConsult[0], inputConsult[1]],
      statusMessage = document.createElement('div'),
          statusMessageLoad = document.createElement('IMG'),
          statusMessageOk = document.createElement('IMG');
      statusMessageLoad.classList.add('status-img');
      statusMessageLoad.src = "img/ajax-loader.GIF";
      statusMessageOk.src = "img/success.SVG";
      statusMessage.classList.add('status');
      // валидация
      var //inputPhone = document.querySelectorAll('input[name="phone"]'),
      inputName = document.querySelectorAll('input[name="name"]'),
          inputMail = document.querySelectorAll('input[name="email"]'),
          inputMessage = document.querySelectorAll('[name="message"]');

      // validator(inputPhone, '^[+][0-9] [(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}$', '+7-999-999-99-99');
      for (var i = 0; i < inputName.length; i++) {
         inputName[i].onkeyup = function (event) {

            var a = event.target.value.replace(/[\>\<\[\]\{\}\/\|\\':;`~"e+A-Za-z0-9!@#$%^&*()_=.,?-]/gi, '');
            event.target.value = a;
         };
      }
      for (var _i4 = 0; _i4 < inputMessage.length; _i4++) {
         inputMessage[_i4].onkeyup = function (event) {

            var a = event.target.value.replace(/[\>\<\[\]\{\}\/\|\\':;`~"e+A-Za-z0-9!@#$%^&*()_=.,?-]/gi, '');
            event.target.value = a;
         };
      }

      // validator(inputName, '^[А-Яа-я]+$', 'Введите имя на русском');
      validator(inputMail, '^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$', 'введите почту');
      // validator(inputMessage, '^[А-Яа-я]+$', 'Введите комментарий на русском');

      function validator(inputsArr, regExpr, plaseholder) {
         for (var _i5 = 0; _i5 < inputsArr.length; _i5++) {
            inputsArr[_i5].setAttribute("pattern", regExpr);
            inputsArr[_i5].setAttribute("placeholder", plaseholder);
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
            for (var _i6 = 0; _i6 < inputConsult.length; _i6++) {
               _this[_i6].classList.remove('hide');
               _this.classList.add('show');
            }

            // В качестве аргумента передаем контекст вызова

            event = event.preventDefault();
            var formData = new FormData(this);

            function postData(data) {
               return new Promise(function (resolve, reject) {
                  var request = new XMLHttpRequest();

                  request.open('POST', 'server.php');

                  request.setRequestHeader('Content-Type', 'application/x-www-form-unlencoded');

                  request.onreadystatechange = function () {
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

            /* function clearInput() {
                  for (var i = 0; i < inputS.length; i++) {
                      inputS[i].value = ''; // очищаем поля ввода
                  }
            }  */

            postData(formData).then(function () {
               _this.appendChild(statusMessageLoad);
               _this.appendChild(statusMessage);
               statusMessage.innerHTML = status.load;
            }).then(function () {
               _this.removeChild(statusMessageLoad);
               _this.removeChild(statusMessage);
               for (var _i7 = 0; _i7 < _this.length; _i7++) {
                  _this[_i7].classList.add('hide');
                  _this[_i7].classList.remove('show');
               }
               _this.appendChild(statusMessageOk);
               _this.appendChild(statusMessage);
               statusMessage.innerHTML = status.ok;
               statusMessageOk.style.maxHeight = '100px';
            }).catch(function () {
               _this.removeChild(statusMessageLoad);
               _this.removeChild(statusMessageOk);
               statusMessage.innerHTML = status.fail;
            }); /*  .then(clearInput);  */
         } // END Go метод объекта

      }; // END toServer object

      formDesign.addEventListener('submit', toServer.Go);
      formConsult.addEventListener('submit', toServer.Go);
      formMain.addEventListener('submit', toServer.Go);
   }
   ajax();
   // module.exports = ajax;
   // formsValid END Формы в модальных окнах


   // onHover START Картинки при наведении
   function onHover() {

      var sizeSmall = document.querySelector('.size-1'),
          sizeMed = document.querySelector('.size-2'),
          sizeLar = document.querySelector('.size-3'),
          sizeXL = document.querySelector('.size-4');

      change(sizeSmall);
      change(sizeMed);
      change(sizeLar);
      change(sizeXL);

      function change(element) {

         element.onmouseenter = function (event) {

            var target = event.target,
                attr = target.getAttribute('src'),
                newSrc = attr.replace(/.png/, "-1.png");

            if (attr.length == 15) {
               target.setAttribute('src', newSrc);
            }
         };

         element.onmouseleave = function (event) {

            var target = event.target,
                attr = target.getAttribute('src'),
                newSrc = attr.replace(/-1.png/, ".png");

            if (attr.length > 15) {
               target.setAttribute('src', newSrc);
            }
         };
      }
   }
   onHover();
   // onHover END Картинки при наведении


   // calc START Калькулятор
   function calc() {

      var size = document.querySelector('#size'),
          // select
      material = document.querySelector('#material'),
          // select
      options = document.querySelector('#options'),
          // select
      promo = document.querySelector('.promocode'),
          total = 0,
          totalValue = document.querySelector('.calc-price');

      size.addEventListener('change', function () {
         plus();
      });
      material.addEventListener('change', function () {
         plus();
      });
      options.addEventListener('change', function () {
         plus();
      });
      promo.addEventListener('change', function () {
         plus();
      });

      function plus() {
         if (size.value != '0' && material.value != '0') {
            total = + +size.value + +material.value + +options.value;
            if (promo.value == 'IWANTPOPART') {
               total = total * 0.7;
            }
            totalValue.innerHTML = total;
         } else {
            totalValue.innerHTML = 0;
         }
      }
   }
   calc();
   // calc END Калькулятор


   // sliderS START слайдерЫ
   function slider() {
      var MslideIndex = 1,
          FslideIndex = 1,
          slideSFooter = document.querySelectorAll('.feedback-slider-item'),
          slideSMain = document.querySelectorAll('.main-slider-item'),
          prev = document.querySelector('.main-prev-btn'),
          next = document.querySelector('.main-next-btn');

      setInterval(mainSlideR, 5000);
      // на главном экране
      function mainSlideR() {
         if (MslideIndex == 1) {
            slideSMain[0].classList.add('show');
            slideSMain[0].classList.remove('hide');

            slideSMain[1].classList.add('hide');
            slideSMain[1].classList.remove('show');
            slideSMain[0].animate(animateY, {
               duration: 1000,
               fill: 'forwards'
            });
            MslideIndex++;
         } else {
            MslideIndex--;
            slideSMain[1].classList.add('show');
            slideSMain[1].classList.remove('hide');

            slideSMain[0].classList.add('hide');
            slideSMain[0].classList.remove('show');
            slideSMain[1].animate(animateY, {
               duration: 1000,
               fill: 'forwards'
            });
         }
      }
      mainSlideR();

      var animateY = [{
         transform: 'translateY(-700px)'
      }, {
         transform: 'translateY(0px)'
      }];

      function footerSlideR(n) {
         if (n > slideSFooter.length) {
            FslideIndex = 1;
         }
         if (n < 1) {
            FslideIndex = slideSFooter.length;
         }
         for (var i = 0; i < slideSFooter.length; i++) {
            slideSFooter[i].style.display = 'none';
         }
         slideSFooter[FslideIndex - 1].style.display = 'block';
      }
      footerSlideR(FslideIndex);

      function auto() {
         plusSlide(1);
         slideSFooter[FslideIndex - 1].animate(animateX_Right, {
            duration: 300,
            fill: 'forwards'
         });
      }
      setInterval(auto, 3000);

      function plusSlide(n) {
         footerSlideR(FslideIndex += n);
      }
      //function currentSlide(n) {
      // footerSlideR(FslideIndex = n);
      // }

      prev.addEventListener('click', function () {
         plusSlide(-1);
         slideSFooter[FslideIndex - 1].animate(animateX_Left, {
            duration: 300,
            fill: 'forwards'
         });
      });

      next.addEventListener('click', function () {
         plusSlide(1);
         slideSFooter[FslideIndex - 1].animate(animateX_Right, {
            duration: 300,
            fill: 'forwards'
         });
      });

      var animateX_Left = [{
         transform: 'translateX(-400px)'
      }, {
         transform: 'translateX(0px)'
      }];

      var animateX_Right = [{
         transform: 'translateX(+400px)'
      }, {
         transform: 'translateX(0px)'
      }];
   }
   slider();
   // sliderS END слайдерЫ


   //  START Аккордеон
   function accordion() {

      var btnAcc = document.querySelectorAll('.accordion-heading'),
          blockAcc = document.querySelectorAll(".accordion-block");

      for (var i = 0; i < blockAcc.length; i++) {
         blockAcc[i].style.display = 'none';
      }

      var _loop2 = function _loop2(_i8) {

         btnAcc[_i8].addEventListener('click', function () {

            for (var q = 0; q < btnAcc.length; q++) {
               btnAcc[q].classList.remove('ui-accordion-header-active');
               this.classList.add('ui-accordion-header-active');

               if (btnAcc[q].classList.contains('ui-accordion-header-active')) {

                  blockAcc[q].style.display = 'block';
                  blockAcc[q].style.opacity = 0;
                  opacity(blockAcc[_i8], 50, 1);
               } else {
                  blockAcc[q].style.display = 'none';
               }
            }
         });
      };

      for (var _i8 = 0; _i8 < btnAcc.length; _i8++) {
         _loop2(_i8);
      }
   }
   // анимация
   function opacity(element, speed, max_opac) {
      var I = window.setInterval(function () {
         if (+element.style.opacity > max_opac || !element.style.opacity) {
            element.style.opacity = 1;window.clearInterval(I);
         } else {
            element.style.opacity = +element.style.opacity + 0.08;
         }
      }, speed);
   }
   accordion();
   //  END Аккордеон


   //  START Гамбургер-меню
   function burger() {

      var //style = getComputedStyle(html),
      width = document.body.offsetWidth,
          burger = document.querySelector('.burger'),
          burger_menu = document.querySelector('.burger-menu');

      if (+width > 768) {

         burger.classList.add('bad-width');
      }

      burger.addEventListener('click', function () {
         if (burger.classList.contains('bad-width')) {} else {
            burger_menu.classList.toggle('show');
         }
      });

      window.addEventListener("resize", function () {
         var style = getComputedStyle(html),
             width = style.width.replace(/px/, '');

         if (+width < 768) {
            burger.classList.remove('bad-width');
         } else {
            burger_menu.classList.remove('show');
            burger.classList.add('bad-width');
         }
      });
   }
   burger();
   //  END Гамбургер-меню


   //  START Модальное окно при пролистывании
   function showModalOnEnd() {

      var heightFull = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
          btnAll = document.querySelectorAll('button'),
          btnClickIndex = 0;

      for (var i = 0; i < btnAll.length; i++) {
         btnAll[i].addEventListener('click', function () {
            btnClickIndex++;
         });
      }

      window.addEventListener("scroll", function () {

         var heightWindow = document.documentElement.clientHeight,
             heightScroll = window.pageYOffset || document.documentElement.scrollTop,
             userScroll = heightWindow + heightScroll + '';
         userScroll = userScroll.substring(0, 5);
         userScroll = +userScroll;

         // console.log("heightAll", heightFull);
         // console.log("heightScroll", heightScroll);

         // console.log("Full = Scroll + Window", userScroll);

         if (btn_gift.classList.contains('hide')) {} else if (btnClickIndex < 1) {
            if (heightFull === userScroll || heightFull === ++userScroll || heightFull === --userScroll) {
               showGift();
            }
         }
      });
   }
   showModalOnEnd();
   //  END Модальное окно при пролистывании

}); // GENERAL END 


//  START 

//  END