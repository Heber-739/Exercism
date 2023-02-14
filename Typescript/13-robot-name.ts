/* Administre la configuración de fábrica del robot. Cuando un robot sale del piso de la fábrica, no tiene nombre. 
La primera vez que enciende un robot, se genera un nombre aleatorio en formato de dos letras mayúsculas seguidas de tres 
dígitos, como RX837 o BC811. De vez en cuando necesitamos restablecer un robot a su configuración de fábrica, lo que 
significa que su nombre se borra. La próxima vez que pregunte, ese robot responderá con un nuevo nombre aleatorio. 
Los nombres deben ser aleatorios: no deben seguir una secuencia predecible. El uso de nombres aleatorios implica un
riesgo de colisiones. Su solución debe garantizar que cada robot existente tenga un nombre único.
 */
export class Robot {
  private static serial: number = 0;
  private nameRobot: string;

  constructor() {
    this.nameRobot = this.resetName();
  }

  public get name(): string {
    return this.nameRobot;
  }

  public resetName(): string {
    Robot.releaseNames();
    let alphabet: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0";
    let aleatorio: any = () => {
      return alphabet[Math.round(Math.random() * 25 + 1)];
    };
    if (Robot.serial < 100) {
      if (Robot.serial < 10) {
        return `${aleatorio()}${aleatorio()}00${Robot.serial}`;
      }
      return `${aleatorio()}${aleatorio()}0${Robot.serial}`;
    }
    return `${aleatorio()}${aleatorio()}${Robot.serial}`;
  }

  public static releaseNames(): void {
    Robot.serial = Robot.serial + Math.round(Math.random() * 7 + 1);
  }
}
let robot = new Robot();
const originalName = robot.name;
robot.resetName();
const newName = robot.name;
console.log(originalName, newName);
