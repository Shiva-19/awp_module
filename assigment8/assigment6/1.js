var counter = 1;
var likeCounter = 1;


function commentHere() {
    // newelement initialization
    let newel = document.createElement("div");
    newel.textContent = "comment " + counter;

    // styling
    newel.style.background = "tomato";
    newel.style.margin = "4px";


    // appending to the parent box
    let commentBox = document.querySelector("#commentBox");
    commentBox.appendChild(newel);

    counter++;
}

function likeHere() {
    likeCounter++;
    let b = document.querySelector("#likeid");

    b.innerHTML = "Like " + likeCounter;
}


