function handleMouseOver() {
    let newele = document.querySelector("div").children[0];
    newele.style.background = "green";
    newele.style.color = "blue";
    newele.innerHTML = "hello guys!";

}
function handleMouseOut() {
    let newele = document.querySelector("div").children[0];
    newele.style.background = "black";
    newele.style.color = "white";
    newele.innerHTML = "hello world";
}
