let isDone: boolean = false
let decimal: number = 6
let hex: number = 0xf00d

let color: string = "blue"
color = "red"

let list1: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3]

let x: [string, number]
x = ["hello", 10]

console.log(x[0].substr(1))

enum Color {
  Red = 1,
  Green,
  Blue
}
let c: Color = Color.Green

let notSure: any = 4
notSure = "문자열일 수도 있다."

function warnUser(): void {
  console.log(`This is my warning message`)
}

// void type variable should be assigned only undefined or null
let unusable: void = undefined

let n: number = null

function error(message: string): never {
  throw new Error(message)
}

let someValue: any = "This is a string"
let strLength: number = (someValue as string).length
