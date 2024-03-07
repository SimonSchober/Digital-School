// let counter = 0;

// setInterval(function() {
//     counter++;
//     console.log(counter);
// // }, 1000);

/* Ab hier ist der neue Code */

//Suche alle Elemente mit Klasse "diashow"
const diashows = document.getElementsByClassName("diashow");

//Starte Diashow für das erste Element
animateDiashow(diashows[0])

function animateDiashow(diashowElmt) {
    //Suche alle img tags im Diashow element
    const images = diashowElmt.getElementsByTagName("img");
    const button = diashowElmt.getElementsByTagName("button")

    //Buttons
    //Linker Button
    button[0].onclick
    //Rechter Button

    //Das erste Bild einblenden
    images[0].style.opacity = 1;

    //Counter Anlegen 
    let counter = 0;

    //Alle 2 sekunden counter erhöhen
    setInterval(nextImage, 2000);

    function nextImage() {

        //Blende vorheriges Bild aus
        images[counter].style.opacity = 0;

        //Erhöhe counter um 1
        counter++

        //Wiederhole die reihe der Bilder, und setze counter auf 0
        if(counter === images.length) {
            counter = 0;
        }


        //Blende ein neues Bild ein
        images[counter].style.opacity = 1;


    }

    function previousImage() {

        //Blende vorheriges Bild aus
        images[counter].style.opacity = 0;

        //Erhöhe counter um 1
        counter--

        //Wiederhole die reihe der Bilder, und setze counter auf 0
        if(counter === images.length) {
            counter = 0;
        }


        //Blende ein neues Bild ein
        images[counter].style.opacity = 1;


    }
}
