/* Administre la configuración de fábrica del robot. Cuando un robot sale del piso de la fábrica, no tiene nombre. 
La primera vez que enciende un robot, se genera un nombre aleatorio en formato de dos letras mayúsculas seguidas de tres 
dígitos, como RX837 o BC811. De vez en cuando necesitamos restablecer un robot a su configuración de fábrica, lo que 
significa que su nombre se borra. La próxima vez que pregunte, ese robot responderá con un nuevo nombre aleatorio. 
Los nombres deben ser aleatorios: no deben seguir una secuencia predecible. El uso de nombres aleatorios implica un
riesgo de colisiones. Su solución debe garantizar que cada robot existente tenga un nombre único.
 */
export class Robot {
  private static serial: string = "AA999";
  private nameRobot: string = "AA999";

  constructor() {
    this.resetName();
  }

  public get name(): string {
    return this.nameRobot;
  }

  public resetName(): void {
    this.nameRobot = Robot.releaseNames();
  }

  public static releaseNames(): string {
    let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let aleatorio: string = alphabet[Math.round(Math.random() * 25)];

    let firstLetter: string = Robot.serial[0];
    let numbers: number = parseInt(Robot.serial.substring(2));
    numbers--;
    if (numbers < 100) {
      numbers = 999;
      let index: number = alphabet.indexOf(firstLetter);
      firstLetter = alphabet[index + 1];
      this.serial = firstLetter + `${aleatorio}${numbers}`;
    } else {
      this.serial = firstLetter + `${aleatorio}${numbers}`;
    }
    return this.serial;
  }
}
let robot = new Robot();
const originalName = robot.name;
robot.resetName();
const newName = robot.name;
console.log(originalName, newName);
