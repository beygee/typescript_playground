let isDone = false;
let decimal = 6;
let hex = 0xf00d;
let color = "blue";
color = "red";
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let x;
x = ["hello", 10];
console.log(x[0].substr(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
let notSure = 4;
notSure = "문자열일 수도 있다.";
function warnUser() {
    console.log(`This is my warning message`);
}
// void type variable should be assigned only undefined or null
let unusable = undefined;
let n = null;
function error(message) {
    throw new Error(message);
}
let someValue = "This is a string";
let strLength = someValue.length;
