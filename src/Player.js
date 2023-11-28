class Player {

  constructor() {
    this.position = {x: 0, y: 0}
  }

  getPosition() {
    return this.position
  }

  moveRight() {
    this.position.x += 1
  }

  moveLeft() {
    this.position.x -= 1
  }

  moveUp() {
    this.position.y += 1
  }

  moveDown() {
    this.position.y -= 1
  }

}

export default Player
