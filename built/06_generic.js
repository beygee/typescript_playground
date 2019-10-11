function identity(arg) {
    return arg;
}
let output = identity("myString");
// let myIdentity: <T>(arg: T) => T = identity
let myIdentity = identity;
class GenericNumber {
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
let k = { a: 1, b: 2, c: 3, d: 4 };
getProperty(k, "a");
// getProperty(k, 'm')
function create(c) {
    return new c();
}
