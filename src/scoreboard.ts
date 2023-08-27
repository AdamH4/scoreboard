import {v4 as uuidv4} from 'uuid';


interface ScoreBoardInterface {
  createMatch(homeTeamName: string, awayTeamName: string): Match
}


export class Scoreboard implements ScoreBoardInterface {
  matches: Map<string, Match>

  constructor() {
    this.matches = new Map()
  }


  createMatch(homeTeamName: string, awayTeamName: string): Match {
    const match = new Match(
      new Date(),
      homeTeamName,
      awayTeamName
    )

    const id = uuidv4()

    if(!this.matches.has(id)) {
      this.matches.set(id, match)
    }

    return match
  }
}
