class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    for (let i = 0; i < this.cards.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.cards.length);
      let myCardCopy = this.cards[i];
      this.cards[i] = this.cards[randomIndex];
      this.cards[randomIndex] = myCardCopy;
    };
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) this.pairsGuessed++;

    return card1 === card2;

  };
  isFinished() {
    return (this.pairsGuessed * 2 == this.cards.length )
  }
}