import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'
import Match from '../src/model/match'


describe('Update match score', () => {

  let scoreboard: Scoreboard
  let match: Match | null

  beforeEach(() => {
    scoreboard = new Scoreboard()
    match = scoreboard.createMatch('Mexico', 'Canada')
  })

  test('Update match score from match', () => {
    match?.updateScore(1, 0)

    expect(match?.score.scoreString).toBe("1:0")
  })


  test('Update match score from scoreboard', () => {
    if(match){
      scoreboard.updateScore(match.id, 4, 1)

      expect(match.score.scoreString).toBe("4:1")
    }
  })

  test('Update match score with float number', () => {
    if(match){
      scoreboard.updateScore(match.id, 1.25, 1.75)

      expect(match.score.scoreString).toBe("1:2")
    }
  })

})

