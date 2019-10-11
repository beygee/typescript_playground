enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

enum MyResponse {
  No,
  Yes
}

function responsd(recipient: string, message: MyResponse): void {}

responsd("dsas", MyResponse.Yes)

enum Enum {
  A = 1,
  B,
  C = 2
}

let aa = Enum.A
console.log(Enum[aa])
