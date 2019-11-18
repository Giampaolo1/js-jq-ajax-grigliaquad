
// DESCRIZIONE:
//  Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato

$( document ).ready(function() {

  $(".square").click(function(){
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function(datiRitorno){
        console.log(datiRitorno);
        if (response <= 5) {
          // .square background-color:yellow
        }
        else {
          // .square background-color:green
        }

      },
      error: function(){
        console.log("Errore");
      }

    });
  });

});
