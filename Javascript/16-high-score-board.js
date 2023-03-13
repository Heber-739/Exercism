export function createScoreBoard() {
  return { "The Best Ever": 1000000 };
}

export function addPlayer(scoreBoard, player, score) {
  scoreBoard[player] = score;
  return scoreBoard;
}

export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player];
  return scoreBoard;
}

export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points;
  return scoreBoard;
}

export function applyMondayBonus(scoreBoard) {
  for (const key in scoreBoard) {
    scoreBoard[key] += 100;
  }
  return scoreBoard;
}

const scoreBoard = {
  "Dave Thomas": 44,
  "Freyja Ćirić": 539,
  "José Valim": 265,
};

export function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}

const params = {
  score: 2100,
  normalizeFunction: function (score) {
    return score / 2 + 100;
  },
};
console.log(normalizeScore(params));
/* 
  .toEqual(1150);
   */

/* 
  function normalize(score) {
    return 2 * score + 10;
  }
  
  
  // => 810
   */
