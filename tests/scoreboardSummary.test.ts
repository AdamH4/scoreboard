import { test, expect, describe, beforeEach} from '@jest/globals'
import Scoreboard from '../src/scoreboard'
import Match from '../src/model/match'


describe('Scoreboard sumarry', () => {

  let scoreboard: Scoreboard

  const input = [
    {
      teams: ['Mexico', 'Canada'],
      scores: [0, 5],
      orderIndex: 2,
    },
    {
      teams: ['Spain', 'Brazil'],
      scores: [10, 2],
      orderIndex: 1,
    },
    {
      teams: ['Germany', 'France'],
      scores: [2, 2],
      orderIndex: 4,
    },
    {
      teams: ['Uruguay', 'Italy'],
      scores: [6, 6],
      orderIndex: 0,
    },
    {
      teams: ['Argentina', 'Australia'],
      scores: [3, 1],
      orderIndex: 3,
    },
  ]

  let outputMatches: Match[] = new Array(input.length)

  beforeEach(async () => {
    scoreboard = new Scoreboard()

    for(const game of input) {
      const match = scoreboard.createMatch(game.teams[0], game.teams[1])
      if(match) {
        match.updateScore(game.scores[0], game.scores[1])
        outputMatches.splice(game.orderIndex, 1, match)
      }

      await new Promise(resolve => setTimeout(resolve, 100))
    }
  })


  test('Should get summary of scoreboard in right order', () => {
    const summary = scoreboard.getSummary()

    expect(summary).toStrictEqual(outputMatches)
  })

})

