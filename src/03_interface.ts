interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a

a = ro as number[]

let mySquare = createSquare({ color: "red", width: 100 })

interface SearchFunc {
  (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}

interface StringArray {
  [index: number]: string
}

let myArray: StringArray
myArray = ["Bob", "Fred"]
console.log(myArray["1"])

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // [x: number]: Animal
  [x: string]: Dog
}

interface NumberDictionary {
  [index: string]: number
  length: number
  // name: string
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myReadonlyArray: ReadonlyStringArray = ["Alice", "Bob"]

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
  tick()
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep")
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock")
  }
}

let digital = createClock(DigitalClock, 12, 17)
digital.tick()

interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = <Square>{}
square.color = "red"
