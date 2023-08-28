

import { test, expect, describe, beforeEach } from '@jest/globals'
import Scoreboard from '../src/scoreboard'


describe('Scoreboard init', () => {

  let scoreboard: Scoreboard

  beforeEach(() => {
    scoreboard = new Scoreboard()
  })

  test('Initialize Scoreboard', () => {
    expect(scoreboard).toBeDefined()
  })

  test('Has no matches', () => {
    expect(scoreboard.matches.length).toBe(0)
  })
})

