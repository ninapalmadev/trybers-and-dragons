import Race from './Race';

class Orc extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.setInstaces();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static setInstaces() {
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Orc._createdRacesInstances;
  }
}

export default Orc;