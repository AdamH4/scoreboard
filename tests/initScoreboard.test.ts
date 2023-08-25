

import { test, expect } from '@jest/globals'


test('Initialize Scoreboard', () => {

  const scoreboards = new Scoreboard()

  expect(scoreboards).toBeDefined()
})

