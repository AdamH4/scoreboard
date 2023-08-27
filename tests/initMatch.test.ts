import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'
import Match from '../src/model/match'
import MatchState from '../src/model/matchState'


describe('Scoreboard init match', () => {

  let scoreboard: Scoreboard
  let match: Match | null
  let now: Date

  beforeEach(() => {
    scoreboard = new Scoreboard()
    now = new Date()
    match = scoreboard.createMatch(
      'Mexico',
      'Canada'
    )
  })

  test('Match size increased', () => {
    expect(scoreboard.matches.size).toBe(1)
  })

  test('Match exists in scoreboard', () => {
    if(match?.id) {
      const matchInScoreboard = scoreboard.getMatch(match?.id)
      expect(matchInScoreboard).toEqual(match)
    }
  })

  test('Match is started', () => {
    expect(match?.state).toBe(MatchState.STARTED)
  })

  test('Match was created now', () => {
    expect(match?.createdAt).toEqual(now)
  })

  test('Match has initial score', () => {
    expect(match?.score.scoreString).toBe('0:0')
  })

})

