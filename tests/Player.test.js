import Player from '../src/Player.js'

describe('Player class', () => {
  it('should be defined', () => {
    const player = new Player()

    expect(player).toBeDefined()
  })

  it('should have an initial position', () => {
    const player = new Player()
    const position = player.getPosition()

    expect(position).toBeDefined()
  })
})
