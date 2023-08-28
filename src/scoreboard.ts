import {v4 as uuidv4} from 'uuid';
import Match from './model/match';


interface ScoreBoardInterface {
  matches: Map<String, Match>

  getMatch(key: string): Match | undefined
  createMatch(homeTeamName: string, awayTeamName: string): Match | null
  updateScore(id: string, homeTeamScore: number, awayTeamScore: number): Match | null
  finishMatch(id: string): void
  getSumary(): Match[]
}


class Scoreboard implements ScoreBoardInterface {
  matches: Map<string, Match>

  constructor() {
    this.matches = new Map()
  }

  getMatch(key: string): Match | undefined {
      return this.matches.get(key)
  }


  createMatch(homeTeamName: string, awayTeamName: string): Match | null {
    const id = uuidv4()

    const match = new Match(
      id,
      new Date(),
      homeTeamName,
      awayTeamName
    )

    if(!this.matches.has(id)) {
      this.matches.set(id, match)
      return match
    }

    return null
  }

  updateScore(id: string, homeTeamScore: number, awayTeamScore: number): Match | null {
    const match = this.matches.get(id)
    if(match) {
      match.updateScore(homeTeamScore, awayTeamScore)
    }
    return null
  }

  finishMatch(id: string): void {
    const match = this.getMatch(id)
    if(match) {
      match.finishMatch()
      this.matches.delete(match.id)
    }
  }

  getSumary(): Match[] {
    return [...this.matches.values()]
  }
}


export default Scoreboard
