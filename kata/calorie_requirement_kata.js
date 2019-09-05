let calorieCalc = (info) => {
  let name = info[0];
  let gender = info[1];
  let age = info[2];
  let height = info[3];
  let weight = info[4];
  let activity = info[5];
  let c;

  if (gender == "m") {
    c = 5;
  }
  else if (gender == "f") {
    c = -161;
  }

  let rmr = 10 * weight + 6.25 * height - 5 * age + c;
  let kcal;

  if (activity == "little activity") {
    kcal = rmr * 1.2;
  }
  else if (activity == "moderately active") {
    kcal = rmr * 1.55;
  }
  else if (activity == "very active") {
    kcal = rmr * 1.7;
  }
  else if (activity == "extremely active") {
    kcal = rmr * 1.9;
  }

  kcal = Math.floor(kcal * 100) / 100;
  
  return (`${name}'s daily calorie requirement is ${kcal} kcal`)

}

console.log(calorieCalc(["John", "m", 19, 177, 65, "moderately active"]))