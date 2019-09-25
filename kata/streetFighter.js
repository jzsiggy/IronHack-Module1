let getX = (position) => {
  let x = position.split(",")[0];
  x = x.split("");
  x.shift();
  x = x.join("");
  x = parseInt(x);
  return (x);
}

let getY = (position) => {
  let y = position.split(",")[1];
  y = y.split("");
  y.shift();
  y.pop();
  y = y.join("");
  y = parseInt(y);
  return (y);
}

let setPosition = (x, y) => {
  return (`(${x}, ${y})`)
}

let getFightersByPosition = (positionList, fighters) => {
  res = [];
  positionList.forEach((position) => {
    let x = getX(position);
    let y = getY(position);

    res.push(fighters[y][x]);
  })
  return res;
}


function streetFighterSelection(fighters, position, moves){
  let listOfPositions = [];

  moves.forEach((move) => {
    if (move == "up") {
      if (getY(position) > 0) {
        listOfPositions.push(position);
        position = setPosition(getX(position), getY(position)-1);
      };
    };

    if (move == "down") {
      if (getY(position) < fighters.length-1) {
        listOfPositions.push(position);
        position = setPosition(getX(position), getY(position)+1);
      };
    };

    if (move == "right") {
      listOfPositions.push(position);
      if (getX(position) < fighters[getY(position)].length) {
        position = setPosition(getX(position)+1, getY(position));
      } else {
        position = setPosition(0, getY(position));
      }
    };

    if (move == "left") {
      listOfPositions.push(position);
      if (getX(position) > 0) {
        position = setPosition(getX(position)-1, getY(position));
      } else {
        position = setPosition(fighters[getY(position)].length-1, getY(position))
      }
    };
  });
  listOfPositions.push(position);
  console.log(listOfPositions);
  console.log(getFightersByPosition(listOfPositions, fighters));
}

// console.log(getX("(0, 17)"))
// console.log(getY("(0, 17)"));

let fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let movesRight = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];
let movesLeft = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
let moves = ['up', 'left', 'right', 'left', 'left']

position = "(0, 0)";

// console.log(setPosition(4, 7))

console.log(streetFighterSelection(fighters, position, moves))