var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var MyResponse;
(function (MyResponse) {
    MyResponse[MyResponse["No"] = 0] = "No";
    MyResponse[MyResponse["Yes"] = 1] = "Yes";
})(MyResponse || (MyResponse = {}));
function responsd(recipient, message) { }
responsd("dsas", MyResponse.Yes);
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 1] = "A";
    Enum[Enum["B"] = 2] = "B";
    Enum[Enum["C"] = 2] = "C";
})(Enum || (Enum = {}));
let aa = Enum.A;
console.log(Enum[aa]);
