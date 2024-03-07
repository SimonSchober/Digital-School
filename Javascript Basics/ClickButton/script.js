let counter = 0;

let button = document.getElementById("counter-button");

function addOne() {
    counter = counter + 1;
    button.innerText = counter;
} 