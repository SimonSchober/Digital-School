


let isShown = false; //Boolean

function toggleSideWindow() {
    let sideWindow = document.querySelector("#js-side-window");

    if(isShown === false) {
        isShown = true;
        sideWindow.style.right = "0";
    } else {
        isShown = false;
        sideWindow.style.right = "-500px";
    }

} 

function toggleText(e) {
   let p =  e.parentNode.querySelector("p");
   if(p.style.opacity === "1") {
        p.style.opacity = "0";
        e.innerText = "Show text"
   } else {
        p.style.opacity = "1";
        e.innerText = "Hide Text"
   }
} 



    
