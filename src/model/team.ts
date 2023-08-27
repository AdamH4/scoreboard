
interface TeamInterface {
  name: string,
  score: number,

  updateScore(newScore: number):  void
}


class Team implements TeamInterface {
  name: string
  score: number = 0

  constructor(name: string) {
    this.name = name
  }

  updateScore(newScore: number): void {
    this.score = newScore
  }
}
