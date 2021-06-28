import { Hiker } from "../app/Hiker"

describe('Hiker', () => {
  it('answers 42', () => {
    // Arrange
    const hiker = new Hiker()

    // Act
    const answer = hiker.getAnswer()

    // Assert
    expect(answer).toBe(42)
  })
})