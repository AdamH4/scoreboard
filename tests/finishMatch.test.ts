import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'
import Match from '../src/model/match'
import MatchState from '../src/model/matchState'


describe('Finish match', () => {

  let scoreboard: Scoreboard
  let match: Match | null

  beforeEach(() => {
    scoreboard = new Scoreboard()
    match = scoreboard.createMatch('Mexico', 'Canada')
  })

  test('Finish match from Scoreboard', () => {
    if(match){
      scoreboard.finishMatch(match.id)

      expect(match.state).toBe(MatchState.FINISHED)
    }
  })

  test('Finish match straight from Match', () => {
    if(match){
      match.finishMatch()
      expect(match.state).toBe(MatchState.FINISHED)
    }
  })

  test('Finished match is removed from matches', () => {
    if(match){
      scoreboard.finishMatch(match.id)
      const matchFromScoreboard = scoreboard.getMatch(match.id)
      expect(matchFromScoreboard).toBeUndefined()
    }
  })

})

