import Game from '../src/Game'
import Player from '../src/Player'

describe('Game class', () => {

  it('should import Player', () => {
    expect(Player).toBeInstanceOf(Player)
  })

})