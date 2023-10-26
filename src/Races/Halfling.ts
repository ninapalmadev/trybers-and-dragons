import Race from './Race';

class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling.setInstaces();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static setInstaces() {
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return Halfling._createdRacesInstances;
  }
}

export default Halfling;