export class Player {
  constructor(private _name: string, private _score: number = 0) { }
  get name() {
    return this._name;
  }
  get score() {
    return this._score;
  }

  incrementScore() {
    this._score++;
  }
}
