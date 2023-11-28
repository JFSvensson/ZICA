import Player from '../src/Player.js'

describe('Player class', () => {
  let player

  beforeEach(() => {
    player = new Player()
  })

  it('should be defined', () => {
    expect(player).toBeDefined()
  })

  it('should have an initial position', () => {
    const position = player.getPosition()

    expect(position).toBeDefined()
  })

  it('should change position positively along the x-axis', () => {
    const initialPosition = { ...player.getPosition() }
    player.moveRight()

    const newPosition = player.getPosition()

    expect(newPosition.x).toBeGreaterThan(initialPosition.x)
  })

  it('should change position negatively along the x-axis', () => {
    const initialPosition = { ...player.getPosition() }
    player.moveLeft()

    const newPosition = player.getPosition()

    expect(newPosition.x).toBeLessThan(initialPosition.x)
  })

  it('should change position positively along the y-axis', () => {
    const initialPosition = { ...player.getPosition() }
    player.moveUp()

    const newPosition = player.getPosition()

    expect(newPosition.y).toBeGreaterThan(initialPosition.y)
  })

  it('should change position negatively along the y-axis', () => {
    const initialPosition = { ...player.getPosition() }
    player.moveDown()

    const newPosition = player.getPosition()

    expect(newPosition.y).toBeLessThan(initialPosition.y)
  })

})
