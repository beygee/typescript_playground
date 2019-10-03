function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let p1 = { x: 10, y: 20 };
let a = [1, 2, 3, 4];
let ro = a;
a = ro;
let mySquare = createSquare({ color: "red", width: 100 });
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let myArray;
myArray = ["Bob", "Fred"];
console.log(myArray["1"]);
class Animal {
}
class Dog extends Animal {
}
let myReadonlyArray = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let square = {};
square.color = "red";
