import Player from '../src/Player.js'

describe('Player class', () => {
  it('should be defined', () => {
    const player = new Player()

    expect(player).toBeDefined()
  })
})
