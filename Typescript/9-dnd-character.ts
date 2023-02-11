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
