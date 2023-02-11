/* Instrucciones
Para un juego de Dungeons & Dragons , cada jugador comienza generando un personaje con el que puede jugar. Este personaje
tiene, entre otras cosas, seis habilidades; fuerza, destreza, constitución, inteligencia, sabiduría y carisma. Estas seis
habilidades tienen puntajes que se determinan al azar. Para ello, lanza cuatro dados de 6 caras y registra la suma de los
tres dados más grandes. Haces esto seis veces, una por cada habilidad.

Los puntos de vida iniciales de tu personaje son 10 + el modificador de constitución de tu personaje. Encontrarás el modificador
de constitución de tu personaje restando 10 de la constitución de tu personaje, dividiéndolo por 2 y redondeando hacia abajo.

Escriba un generador de caracteres aleatorios que siga las reglas anteriores.

Por ejemplo, los seis lanzamientos de cuatro dados pueden verse así:

5, 3, 1, 6: Descartas el 1 y sumas 5 + 3 + 6 = 14, que le asignas a fuerza.
3, 2, 5, 3: Descartas el 2 y sumas 3 + 5 + 3 = 11, que asignas a la destreza.
1, 1, 1, 1: Descartas el 1 y sumas 1 + 1 + 1 = 3, que asignas a constitución.
2, 1, 6, 6: Descartas el 1 y sumas 2 + 6 + 6 = 14, que le asignas a la inteligencia.
3, 5, 3, 4: Descartas el 3 y sumas 5 + 3 + 4 = 12, que le asignas a la sabiduría.
6, 6, 6, 6: Descartas el 6 y sumas 6 + 6 + 6 = 18, que le asignas a carisma.

 Debido a que la constitución es 3, el modificador de constitución es -4 y los puntos de vida son 6. 
La mayoría de los lenguajes de programación cuentan con generadores (pseudo-)aleatorios, pero pocos lenguajes de programación
están diseñados para tirar dados. Uno de esos lenguajes es Troll */

export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitucion: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;
  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitucion = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitucion);
  }

  public static generateAbilityScore(): number {
    return 3 + Math.floor(Math.random() * 15);
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
const character = new DnDCharacter();
console.log(new DnDCharacter());

/* expect(character.hitpoints).toEqual(
      10 + DnDCharacter.getModifierFor(character.constitution)
    ) */
