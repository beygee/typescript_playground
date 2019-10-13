var TypeCompability;
(function (TypeCompability) {
    class Person {
    }
    let p;
    p = new Person();
    let x = () => ({ name: "Alice" });
    let y = () => ({ name: "Alice", location: "Seattle" });
    let EventType;
    (function (EventType) {
        EventType[EventType["Mouse"] = 0] = "Mouse";
        EventType[EventType["Keyboard"] = 1] = "Keyboard";
    })(EventType || (EventType = {}));
    function listenEvent(eventType, handler) {
        /* ... */
    }
    //상속 Enum을 사용하는 바람직한 방법
    listenEvent(EventType.Mouse, (e) => console.log(`${e.x}, ${e.y}`));
    function invokeLater(args, callback) { }
})(TypeCompability || (TypeCompability = {}));
