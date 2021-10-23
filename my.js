  //function each for document jquery
  $( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
  
  //function each for script jquery
  $.each(obj, function (index, value) {
    console.log(value);
  });

/*
forEach
Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.

Он для каждого элемента массива вызывает функцию callback.

Этой функции он передаёт три параметра callback(item, i, arr):

item – очередной элемент массива.
i – его номер.
arr – массив, который перебирается.
Например:
*/
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  alert( i + ": " + item + " (массив:" + arr + ")" );
});
