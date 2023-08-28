import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'
import Match from '../src/model/match'


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
    expect(scoreboard.matches.length).toBe(1)
  })

  test('Match exists in scoreboard', () => {
    if(match?.id) {
      const matchInScoreboard = scoreboard.getMatch(match?.id)
      expect(matchInScoreboard).toEqual(match)
    }
  })

  test('Match was created now', () => {
    expect(match?.createdAt).toEqual(now)
  })

  test('Home team name', () => {
    expect(match?.homeTeam.name).toBe('Mexico')
  })

  test('Away team name', () => {
    expect(match?.awayTeam.name).toBe('Canada')
  })

  test('Initial total score', () => {
    expect(match?.totalScore).toBe(0)
  })

  test('Match has initial score', () => {
    expect(match?.score.scoreString).toBe('0:0')
  })

})

