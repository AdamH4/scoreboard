import Team from "./team"
import MatchState from "./matchState"
import MatchScore from "./matchScore"


interface MatchInterface {
  id: string,
  createdAt: Date,
  homeTeam: Team,
  awayTeam: Team,
  state: MatchState, 

  updateScore(homeTeamScore: number, awayTeamScore: number): Match
}


class Match implements MatchInterface {
  id: string
  createdAt: Date
  homeTeam: Team
  awayTeam: Team
  state: MatchState

  constructor(id: string, createdAt: Date, homeTeamName: string, awayTeamName: string) {
    this.id = id
    this.createdAt = createdAt
    this.homeTeam = new Team(homeTeamName)
    this.awayTeam = new Team(awayTeamName)
    this.state = MatchState.STARTED
  }

  get score(): MatchScore {
    return new MatchScore(
      this.homeTeam,
      this.awayTeam
    )
  }

  updateScore(homeTeamScore: number, awayTeamScore: number): Match {
    if(this.state == MatchState.STARTED) this.state = MatchState.IN_PROGRESS
    this.homeTeam.score = homeTeamScore
    this.awayTeam.score = awayTeamScore

    return this
  }
}


export default Match
