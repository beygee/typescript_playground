function identity<T>(arg: T): T {
  return arg
}

let output = identity<string>("myString")

// let myIdentity: <T>(arg: T) => T = identity
let myIdentity: { <T>(arg: T): T } = identity

class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

loggingIdentity({ length: 10, value: 3 })

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let k = { a: 1, b: 2, c: 3, d: 4 }

getProperty(k, "a")
// getProperty(k, 'm')

function create<T>(c: { new (): T }): T {
  return new c()
}
