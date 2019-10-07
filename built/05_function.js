function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName = "Smith") {
    if (lastName)
        return `${firstName} ${lastName}`;
    else
        return firstName;
}
let result1 = buildName("Bob");
function buildName2(firstName, ...restOfName) {
    return `${firstName} ${restOfName.join(" ")}`;
}
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createdCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createdCardPicker();
let pickedCard = cardPicker();
console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`);
