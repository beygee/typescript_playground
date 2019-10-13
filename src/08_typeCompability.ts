namespace TypeCompability {
  interface Named {
    name: string
  }

  class Person {
    name: string
  }

  let p: Named

  p = new Person()

  let x: () => { name: string } = () => ({ name: "Alice" })
  let y = () => ({ name: "Alice", location: "Seattle" })

  enum EventType {
    Mouse,
    Keyboard
  }

  interface Event {
    timestamp: number
  }
  interface MouseEvent extends Event {
    x: number
    y: number
  }
  interface KeyEvent extends Event {
    keyCode: number
  }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  //상속 Enum을 사용하는 바람직한 방법
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(`${e.x}, ${e.y}`))

  function invokeLater(args: any[], callback: (...args: any[]) => void) {}
}
