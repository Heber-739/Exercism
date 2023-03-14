export function cookingStatus(timer) {
  if (!timer) {
    ("You forgot to set the timer.");
  }
  return timer == 0 ? "Lasagna is done." : "Not done, please wait.";
}
export function preparationTime(layers, timer) {
  return timer ? layers.length * timer : layers.length * 2;
}
export function quantities(layers) {
  let res = { noodles: 0, sauce: 0.0 };
  layers.forEach((e) => {
    if (e == "noodles") {
      res[e] += 50;
    }
    if (e == "sauce") {
      res[e] += 0.2;
    }
  });
  return res;
}
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, nr) {
  let res = {};
  for (const key in recipe) {
    res[key] = (recipe[key] / 2) * nr;
  }
  return res;
}
