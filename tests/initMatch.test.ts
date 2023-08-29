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

  test('Should increase matches size', () => {
    expect(scoreboard.matches.length).toBe(1)
  })

  test('Match should exists in scoreboard', () => {
    if(match?.id) {
      const matchInScoreboard = scoreboard.getMatch(match?.id)
      expect(matchInScoreboard).toEqual(match)
    }
  })

  test('Match should be created now', () => {
    expect(match?.createdAt).toEqual(now)
  })

  test('Home team name should be Mexico', () => {
    expect(match?.homeTeam.name).toBe('Mexico')
  })

  test('Away team name should be Canada', () => {
    expect(match?.awayTeam.name).toBe('Canada')
  })

  test('Initial total score should be zero', () => {
    expect(match?.totalScore).toBe(0)
  })

  test('Match string score shoudl be 0:0', () => {
    expect(match?.score.scoreString).toBe('0:0')
  })

})

