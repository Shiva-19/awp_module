let counter = 1;

function increment() {
    let counterEle = document.querySelector("#id1");

    counter = counter + 1;

    counterEle.innerHTML = counter;
}

function decrement() {
    let counterEle = document.querySelector("#id2");

    counter = counter - 1;

    counterEle.innerHTML = counter;
}