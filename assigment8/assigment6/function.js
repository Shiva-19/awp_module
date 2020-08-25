
Named Function:
function sum(a, b) {
    return a + b;
}

Anonymous Function:
let pqr = function (x, y) {
    return x * y;
}

Lambda Function:
let x = (m, n) => {
    return m / n;
}

function hello(fn) {
    fn();
}

Callback function using named function:

    hello(function abc() {
        console.log("hiii");
    });

Callback function using anonymous function:

    hello(function () {
        console.log("hello world");
    });

Callback function using Lambda function:

    let x = () => {
        console.log("happy ending");
    }

hello(x);