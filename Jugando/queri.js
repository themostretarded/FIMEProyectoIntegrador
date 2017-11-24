/*$( ".Celda" ).css( "border", "3px solid red" );
$( ".Fila" ).click(function() {
  $( this ).css( "border", "3px solid green" );
});*/
$( ".Fila" ).click(function() {
    $( this ).addClass("Pintaverde");
  });
    $( ".Celda" ).click(function() {
    $( this ).removeClass( "Pintaverde" ).addClass( "PintaNaranja" );
  });