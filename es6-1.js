var num = 0;
var msg = "test";

console.log(num);
num = 1;
console.log(num);

{
    let num = 5;
    console.log(num);
}

{
    console.log(mun);
}

{
    const num = 4;
    console.log(num);
    num = 7;
}var num = 0;
var msg = "test";
console.log(num);
num = 1;
console.log(num);
{
    let num = 5;
    console.log(num);
}
{
    const num = 4;
    console.log(num);
}
function add(a, b) {
    return a * b;
}
var addFn = function (a, b) {
    return a * b;
};
console.log(add(5, 3));
console.log(addFn(4, 5));
const addEs6 = (a, b) => a * b;
let multiAdd = (a, b) => {
    let c = a * b;
    return c;
};
console.log(addEs6(10, 5));
console.log(multiAdd(4, 2));