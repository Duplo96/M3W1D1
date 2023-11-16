   /* JS Exercises should go here */

      // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
      // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
      // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const removeTwitter = function(){
    const twitter= document.querySelector("aside .p-4:nth-child(3) ol.list-unstyled li:nth-of-type(2)")
twitter.style.display="none"
}
removeTwitter()




const continueToRead = document.querySelector(".jumbotron a");
const firstCard = document.querySelector(".col-md-6:first-of-type");
const continueToReadLinks = document.querySelectorAll(".col-md-6 a.stretched-link");
function setContinueReading(e) {
    firstCard.style.display = "none";
    const col = e.target.closest(".col-md-6");
    if (col) {
        col.style.display = "none";
    }

    console.log(e.target);
}
continueToRead.addEventListener("click", setContinueReading);
for (let i = 0; i < continueToReadLinks.length; i++) {
    continueToReadLinks[i].addEventListener("click", setContinueReading);
}