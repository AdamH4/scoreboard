import Team from "./team"
import MatchScore from "./matchScore"


interface MatchInterface {
  get score(): MatchScore
  get totalScore(): number
  get id(): string
  get createdAt(): Date
  get homeTeam(): Team
  get awayTeam(): Team

  updateScore(homeTeamScore: number, awayTeamScore: number): Match
}


class Match implements MatchInterface {
  private _id: string
  private _createdAt: Date
  private _homeTeam: Team
  private _awayTeam: Team

  constructor(id: string, createdAt: Date, homeTeamName: string, awayTeamName: string) {
    this._id = id
    this._createdAt = createdAt
    this._homeTeam = new Team(homeTeamName)
    this._awayTeam = new Team(awayTeamName)
  }

  get homeTeam(): Team {
    return this._homeTeam
  }

  get awayTeam(): Team {
    return this._awayTeam
  }

  get score(): MatchScore {
    return new MatchScore(
      this._homeTeam,
      this._awayTeam
    )
  }

  get id(): string {
      return this._id
  }

  get createdAt(): Date {
    return this._createdAt
  }

  get totalScore(): number {
    return this._homeTeam.score + this._awayTeam.score
  }

  updateScore(homeTeamScore: number, awayTeamScore: number): Match {
    this._homeTeam.score = homeTeamScore
    this._awayTeam.score = awayTeamScore

    return this
  }
}


export default Match
