{
  class Greeter {
    greeting: string
    constructor(message: string) {
      this.greeting = message
    }

    greet() {
      return `Hello, ${this.greeting}`
    }
  }

  let greeter = new Greeter("world")

  console.log(greeter)

  class Animal {
    private name: string
    constructor(theName: string) {
      this.name = theName
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...")
      super.move(distanceInMeters)
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name)
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...")
      super.move(distanceInMeters)
    }
  }

  class Dog extends Animal {
    bark() {
      console.log(`Woof ! Woof !`)
    }
  }

  let sam = new Snake("Sammy the Python")
  sam.move()

  class Octopus {
    numberOfLegs: number = 8
    constructor(public name: string) {}
  }

  let passcode = "secret"
  class Employee {
    private _fullName: string
    get fullName(): string {
      return this._fullName
    }
    set fullName(newName: string) {
      if (passcode && passcode == "secret") {
        this._fullName = newName
      } else {
        console.log("오류: employee의 무단 업데이트!")
      }
    }
  }

  class Grid {
    static origin = { x: 0, y: 0 }
    calculateDistFromOrigin(point: { x: number; y: number }) {
      const xDist: number = point.x - Grid.origin.x
      const yDist: number = point.y - Grid.origin.y

      return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
    }

    constructor(public scale: number) {}
  }

  let grid1 = new Grid(1.0)
  let grid2 = new Grid(5.0)

  console.log(grid1.calculateDistFromOrigin({ x: 10, y: 10 }))
  console.log(grid2.calculateDistFromOrigin({ x: 10, y: 10 }))

  abstract class Ani {
    abstract makeSound(): void
    move(): void {
      console.log("roaming the earth...")
    }
  }
}

