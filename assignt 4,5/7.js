

var commentCounter = 1;
var likeCounter = 1;
function commentHere() {
    const newElement = document.createElement("div");
    newElement.textContent = "comment" + commentCounter;


    const commentbox = document.querySelector("#commentBox");
    commentbox.append(newElement);

    comentcounter++;
}


function likeHere() {

    likecounter++;
    l
    let btnele = document.queryselector("#likeid");
    btnele.innerHTML = "like" + commentCounter;

}