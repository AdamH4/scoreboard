import Team from "./team"
import MatchScore from "./matchScore"


interface MatchInterface {
  id: string,
  createdAt: Date,
  homeTeam: Team,
  awayTeam: Team,

  updateScore(homeTeamScore: number, awayTeamScore: number): Match
}


class Match implements MatchInterface {
  id: string
  createdAt: Date
  homeTeam: Team
  awayTeam: Team

  constructor(id: string, createdAt: Date, homeTeamName: string, awayTeamName: string) {
    this.id = id
    this.createdAt = createdAt
    this.homeTeam = new Team(homeTeamName)
    this.awayTeam = new Team(awayTeamName)
  }

  get score(): MatchScore {
    return new MatchScore(
      this.homeTeam,
      this.awayTeam
    )
  }

  updateScore(homeTeamScore: number, awayTeamScore: number): Match {
    this.homeTeam.score = Number.isInteger(homeTeamScore)
      ? homeTeamScore
      : Math.round(homeTeamScore)

    this.awayTeam.score = Number.isInteger(awayTeamScore)
      ? awayTeamScore
      : Math.round(awayTeamScore)

    return this
  }
}


export default Match
