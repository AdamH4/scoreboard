import Team from "./team"


interface MatchScoreInterface {
  scoreString: string
}


class MatchScore implements MatchScoreInterface {
  private _home: Team
  private _away: Team

  constructor(home: Team, away: Team) {
    this._home = home 
    this._away = away
  }

  get scoreString(): string {
    return `${this._home.score}:${this._away.score}`
  }
}


export default MatchScore
