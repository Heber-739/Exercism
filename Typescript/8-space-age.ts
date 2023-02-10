export function age(planet: string, seconds: number): number {
  let periodos: { [key: string]: number } = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  let secondsEarth: number = 60 * 60 * 24 * 365.25;
  let secondsInPlanet: number = secondsEarth * periodos[planet];
  let yearsInPlanet: string = (seconds / secondsInPlanet).toFixed(2);
  return parseFloat(yearsInPlanet);
}
console.log(age("mercury", 2134835688));
