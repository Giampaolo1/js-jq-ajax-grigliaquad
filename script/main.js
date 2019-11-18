
// DESCRIZIONE:
//  Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

var elemento = $(".square")

$( document ).ready(function() {

  $(".square").click(function(){
    var clickedSquare = $(this)
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(datiRitorno){
        // console.log(datiRitorno);
        // console.log(clickedSquare);

        if (datiRitorno.response <= 5) {
          // .square background-color:yellow
          // console.log("Minore di 5");
          // clickedSquare.style = ("background-color:yellow")
           clickedSquare.addClass('yellow');


        } else {
          // console.log("Maggiore di 5");
          clickedSquare.addClass('green');
        }

        elemento.html(datiRitorno.response);


      },
      error: function(){
        console.log("Errore");
      }

    });
  });

});
