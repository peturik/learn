  //function each for document jquery
  $( "li" ).each(function( index ) {
    //console.log( index + ": " + $( this ).text() );
  });
  
  //function each for script jquery
  var obj = {
   one: 1,
   two: 2,
   three: 3,
   four: 4,
   five: 5
};
  $.each(obj, function (index, value) {
    //console.log(value);
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
метод split используется для разделения строки на массив подстрок.
метод split возвращает новый массив.
метод split не изменяет исходную строку.

string.split(separator, limit)


// только с указанием индекса
array.splice( start )

// с указанием индекса и количества удаляемых элементов
array.splice( start, deleteCount )

// с указанием индекса, количества удаляемых элементов и с добавлением элементов
array.splice( start, deleteCount, element1, element2, ..., elementX )
