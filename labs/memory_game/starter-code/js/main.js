const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);

let compute = (clickCount) => {
  if (clickCount % 2 == 0 && clickCount != 0) {

    let cardsFacingUp = document.querySelectorAll('.is-up');
    console.log(cardsFacingUp);
    let firstCard = cardsFacingUp[0];
    let secondCard = cardsFacingUp[1];

    if (memoryGame.checkIfPair(firstCard.getAttribute('data-card-name'), secondCard.getAttribute('data-card-name'))) {
      firstCard.classList.add('blocked');
      secondCard.classList.add('blocked');
    } 
    else {
      setTimeout(() => {
        firstCard.children[1].classList.toggle('back');
        firstCard.children[0].classList.toggle('back');
        firstCard.classList.remove('is-up');

        secondCard.children[1].classList.toggle('back');
        secondCard.children[0].classList.toggle('back');
        secondCard.classList.remove('is-up');
      }, 1000);
    }


    let pairsGuessed = document.querySelector('#pairs_guessed');
    let pairsClicked = document.querySelector('#pairs_clicked');

    if (pairsGuessed) {
      pairsGuessed.innerText = memoryGame.pairsGuessed;
      // console.log(pairsGuessed);
    }

    if (pairsClicked) {
      pairsClicked.innerText = memoryGame.pairsClicked;
      // console.log(pairsClicked);
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  memoryGame.shuffleCards();
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  let board = document.querySelector('#memory_board');
  let clicks = 0;


  if (board) {
    board.innerHTML = html;
  };

  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function(e) {
      clicks++;
      console.log(clicks);

      e.target.parentElement.classList.add('is-up');
      e.target.parentElement.querySelector('.front').classList.toggle("back");
      e.target.parentElement.querySelector('.back').classList.toggle("back");

      compute(clicks);
    };
  });
  
});


