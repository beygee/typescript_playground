function add(x: number, y: number): number {
  return x + y
}

let myAdd: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y
}

function buildName(firstName: string, lastName: string = "Smith"): string {
  if (lastName) return `${firstName} ${lastName}`
  else return firstName
}

let result1 = buildName("Bob")

function buildName2(firstName: string, ...restOfName: string[]): string {
  return `${firstName} ${restOfName.join(" ")}`
}

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  createdCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createdCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
    }
  }
}

let cardPicker = deck.createdCardPicker()
let pickedCard = cardPicker()

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`)
