$(document).ready(function () {

    $("input").on("keyup",function () {

       vornamelaenge = $("#vorname").val().length;
       nachnamelaenge = $("#nachname").val().length;
       passwortlaenge = $("#passwort").val().length;


       /* Vorname: */

       if(vornamelaenge < 1){
           $(".feld1").css("border","2px solid red");
           document.getElementById("nachricht1").innerHTML = "<span style='color: red; font-family: 'Karla', sans-serif'>Bitte geben Sie einen Vornamen an.</span>";
       }else if(vornamelaenge > 1){
           $(".feld1").css("border","2px solid lightgreen");
           document.getElementById("nachricht1").innerHTML = "<span style='color: lightgreen'>Geschafft!</span>";
       }
       else{
           $(".feld1").css("border","2px solid lightgreen");
           document.getElementById("nachricht1").innerHTML = "<span style='color: red'></span>";
       }

       /* Nachname: */

       if (nachnamelaenge < 1){
           $(".feld2").css("border","2px solid red");
           document.getElementById("nachricht2").innerHTML = "<span style='color: red; font-family: 'Karla', sans-serif'>Bitte geben Sie einen Nachnamen an.</span>";
       }else {
           $(".feld2").css("border","2px solid lightgreen");
           document.getElementById("nachricht2").innerHTML = "<span style='color: red'></span>";
       }

       /* Passwort: */

       if (passwortlaenge < 5){
           $(".feld3").css("border","2px solid red");
           document.getElementById("nachricht3").innerHTML = "<span style='color: red; font-family: 'Karla', sans-serif'>Bitte geben Sie ein Passwort an.Das Passwort muss zwischen 5 und 10 Zeichen lang sein.</span>";
       }else if(passwortlaenge > 10){
           $(".feld3").css("border","2px solid red");
           document.getElementById("nachricht3").innerHTML = "<span style='color: red'>Das angegebene Passwort ist zu lange.</span>";
        }
       else {
           $(".feld3").css("border","2px solid lightgreen");
           document.getElementById("nachricht3").innerHTML = "<span style='color: red'></span>";
       }

   });

});
