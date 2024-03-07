const games = document.getElementsByClassName("card");
const searchField = document.getElementById("js-searchField");

searchField.addEventListener("keyup", filterGames);


function filterGames() {
    const searchValue = searchField.value.toLowerCase();
    
    for(let game of games) {
        const gameTitle = game.querySelector("h5").innerText.toLowerCase();
        if(gameTitle.includes(searchValue)) {
            game.parentNode.parentNode.style.display = "block";
        } else {
            game.parentNode.parentNode.style.display = "none";
        }
    }
}