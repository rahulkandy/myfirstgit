/*let a = 10;
let b = 20;
let result = check(10, 20);
console.log(result);
function check(result) {
    console.log(result);
    switch (result) {

        case 10:
            return (a > b);
            break;

        case 2:
            return (a < b);
            break;
        default: (console.log("Hello"));
            break;

    }
}
*/

let a = 20;
let b = 30;
const operator = "+";
console.log(execute(a, b, operator))
function execute(a, b, operator) {
    switch (operator) {

        case "+": return a + b;
            break;
        case "-": return a - b;
            break;
        case "*": returna * b;
            break;
        case "/": return a / b;
            break;

    }
}