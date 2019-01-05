//Была ли уже дробная точка в числе
var isdouble = 0;
var number1 = 0;
var number2 = 0;

///Вывод символа в строку ввода
function input(_inchar) {
  if (_inchar == ".") {
    if (isdouble) return;
    else isdouble = 1;
  }
  else if (_inchar == "0") {
    if (document.resultform.resultview.value.length == 0) return;
  }

  if (document.resultform.resultview.value.length < (12 + isdouble) && _inchar != ".") {
      document.resultform.resultview.value += _inchar;
  }
}

///Очистка ввода
function clean() {
  isdouble = 0;
  document.resultform.resultview.value = "";
}

///Убирает один символ со строки ввода
function back() {
  var str = document.resultform.resultview.value;
  if (str[str.length - 1] == ".") isdouble = 0;
  document.resultform.resultview.value = str.substr(0, str.length - 1);
}
