{
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return `Hello, ${this.greeting}`;
        }
    }
    let greeter = new Greeter("world");
    console.log(greeter);
    class Animal {
        constructor(theName) {
            this.name = theName;
        }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    class Snake extends Animal {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal {
        constructor(name) {
            super(name);
        }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    class Dog extends Animal {
        bark() {
            console.log(`Woof ! Woof !`);
        }
    }
    let sam = new Snake("Sammy the Python");
    sam.move();
    class Octopus {
        constructor(name) {
            this.name = name;
            this.numberOfLegs = 8;
        }
    }
    let passcode = "secret";
    class Employee {
        get fullName() {
            return this._fullName;
        }
        set fullName(newName) {
            if (passcode && passcode == "secret") {
                this._fullName = newName;
            }
            else {
                console.log("오류: employee의 무단 업데이트!");
            }
        }
    }
    class Grid {
        constructor(scale) {
            this.scale = scale;
        }
        calculateDistFromOrigin(point) {
            const xDist = point.x - Grid.origin.x;
            const yDist = point.y - Grid.origin.y;
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
    }
    Grid.origin = { x: 0, y: 0 };
    let grid1 = new Grid(1.0);
    let grid2 = new Grid(5.0);
    console.log(grid1.calculateDistFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistFromOrigin({ x: 10, y: 10 }));
    class Ani {
        move() {
            console.log("roaming the earth...");
        }
    }
}
