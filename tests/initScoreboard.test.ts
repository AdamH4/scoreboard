

import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'


describe('Scoreboard init', () => {

  let scoreboard: Scoreboard

  beforeEach(() => {
    scoreboard = new Scoreboard()
  })

  test('Should initialize Scoreboard', () => {
    expect(scoreboard).toBeDefined()
  })

  test('Should have no matches', () => {
    expect(scoreboard.matches.length).toBe(0)
  })
})

