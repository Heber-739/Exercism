export function frontDoorResponse(line) {
  return line.trim()[0];
}

export function frontDoorPassword(word) {
  let res = word.trim();
  return `${res[0].toUpperCase()}${res.slice(1).toLocaleLowerCase()}`;
}
console.log(frontDoorPassword("heberDuarte"));

export function backDoorResponse(line) {
  return line.trim().slice(-1);
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ", please";
}
console.log(backDoorPassword("heberDuarteaer"));
