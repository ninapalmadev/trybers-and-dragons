import Race from './Race';

class Elf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.setInstaces();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static setInstaces() {
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._createdRacesInstances;
  }
}

export default Elf;