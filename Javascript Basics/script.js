// Javascript code
//Hier ist Javascript code

//Variablen 
var name = 'Simon'; //String
let nachname = "Schober"; //String mit doppelten Anführungsstrichen



let ganzeZahl = 7;//number //Integer (Int)
let kommaZahl //number //Float

let esIstWinter = true; //Boolean //bool
let esIstSommer = false;

//Konstante Variablen können nicht mehr verändert werden 
const PI = 3.14;



//Rechenoperationen

//in der Konsole Nachricht anzeigen
console.log("Hi")

let result = ganzeZahl * PI;
console.log(result);

//Rechenoperationen
let addieren = 4 + 4;
console.log("4 + 4 = ", addieren)

let subtrahieren = 10 - 4;

let multiplizieren = 4 * 4;

let teilen = 10 / 5;
console.log("10 / 5 = ", teilen);


//Listen //Arrays
let personen = ["Simon", "Cristian", "Jonas"];
let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//JavaScript Object
let person = {
    name: "Simon Schober",
    alter: 10,
    hobbys: ["Joggen", "Zeichnen",],
    istVolljährig: false
}

console.log("Name: ", 
person.name
)
console.log("Alter: ", person.alter)
console.log("Name: ", person.hobbys)


//Objects in Listen speichern
let vereinsMitglieder = [
    {
        name: "Simon Schober",
        alter: 10
    },
    {
        name: "Jake Mickle",
        alter: 11
    },
    {
        name: "Myke Jason",
        alter: 13
    }
];

//Schleifen 

//For Schleife
console.log("-------------------------------------------")
console.log("Alle Vereinsmitglieder")
for(let i = 0; i < vereinsMitglieder.length; i++) {
    console.log("Name: ", vereinsMitglieder[i].name);
    console.log("Alter: ", vereinsMitglieder[i].alter);
}
console.log("-------------------------------------------")

//For of
console.log("-------------------------------------------")
console.log("Alle Vereinsmitglieder")
for(let person of vereinsMitglieder) {
    console.log("Name: ", 
person.name
);
    console.log("Alter: ", person.alter);
}
console.log("-------------------------------------------")

//While Schleife 