import Team from "./team"


interface MatchScoreInterface {
  home: Team,
  away: Team

  scoreString: string
}


class MatchScore implements MatchScoreInterface {
  home: Team
  away: Team

  constructor(home: Team, away: Team) {
    this.home = home 
    this.away = away
  }

  get scoreString(): string {
    return `${this.home.score}:${this.away.score}`
  }
}


export default MatchScore
