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

  it('should change position positively along the x-axis', () => {
    const player = new Player()
    const initialPosition = { ...player.getPosition() }
    player.moveRight()

    const newPosition = player.getPosition()

    expect(newPosition.x).toBeGreaterThan(initialPosition.x)
  })

  it('should change position negatively along the x-axis', () => {
    const player = new Player()
    const initialPosition = { ...player.getPosition() }
    player.moveLeft()

    const newPosition = player.getPosition()

    expect(newPosition.x).toBeLessThan(initialPosition.x)
  })

})
