
interface TeamInterface {

  get name(): string
  get score(): number
  set score(score: number)
}


class Team implements TeamInterface {
  private _name: string
  private _score: number = 0

  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  get score() {
    return this._score
  }

  set score(score: number) {
    this._score = Number.isInteger(score)
      ? score
      : Math.round(score)
  }
}


export default Team
