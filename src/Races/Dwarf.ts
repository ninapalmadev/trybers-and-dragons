import Race from './Race';

class Dwarf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.setInstaces();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static setInstaces() {
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._createdRacesInstances;
  }
}

export default Dwarf;