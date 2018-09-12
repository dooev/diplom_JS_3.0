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
   statusMessageLoad.src = "../../img/ajax-loader.GIF";
   statusMessageOk.src = "../../img/success.SVG";
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
module.exports = ajax;