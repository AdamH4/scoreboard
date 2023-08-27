

interface MatchInterface {
  createdAt: Date,
  homeTeam: Team,
  awayTeam: Team,
  state: MatchState, 
}


class Match implements MatchInterface {
  createdAt: Date
  homeTeam: Team
  awayTeam: Team
  state: MatchState

  constructor(createdAt: Date, homeTeamName: string, awayTeamName: string) {
    this.createdAt = createdAt
    this.homeTeam = new Team(homeTeamName)
    this.awayTeam = new Team(awayTeamName)
    this.state = MatchState.STARTED
  }
}
