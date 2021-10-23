  //function each for document jquery
  $( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
  
  //function each for script jquery
  $.each(obj, function (index, value) {
    console.log(value);
  });
