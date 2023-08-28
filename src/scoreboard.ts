import {v4 as uuidv4} from 'uuid';
import Match from './model/match';


interface ScoreBoardInterface {

  get matches(): Match[]
  getMatch(key: string): Match | undefined
  createMatch(homeTeamName: string, awayTeamName: string): Match | null
  updateScore(id: string, homeTeamScore: number, awayTeamScore: number): Match | null
  finishMatch(id: string): void
  getSummary(): Match[]
}


class Scoreboard implements ScoreBoardInterface {
  private _matches: Map<string, Match>

  constructor() {
    this._matches = new Map()
  }

  get matches() {
    return [...this._matches.values()]
  }


  getMatch(key: string): Match | undefined {
      return this._matches.get(key)
  }


  createMatch(homeTeamName: string, awayTeamName: string): Match | null {
    const id = uuidv4()

    const match = new Match(
      id,
      new Date(),
      homeTeamName,
      awayTeamName
    )

    if(!this._matches.has(id)) {
      this._matches.set(id, match)
      return match
    }

    return null
  }

  updateScore(id: string, homeTeamScore: number, awayTeamScore: number): Match | null {
    const match = this._matches.get(id)
    if(match) {
      match.updateScore(homeTeamScore, awayTeamScore)
    }
    return null
  }

  finishMatch(id: string): void {
    const match = this.getMatch(id)
    if(match) {
      this._matches.delete(match.id)
    }
  }

  getSummary(): Match[] {
    return [...this._matches.values()]
      .sort((a, b) => {
        if(a.totalScore === b.totalScore) {
          return b.createdAt.getTime() - a.createdAt.getTime()
        }
        return b.totalScore - a.totalScore
      })
  }
}


export default Scoreboard
