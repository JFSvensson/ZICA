import Player from '../src/player.js'

describe('Player class', () => {
  it('should be defined', () => {
    const player = new Player()

    expect(player).toBeDefined()
  })
})
