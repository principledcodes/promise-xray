import { xray } from './xray'

describe('Xray', () => {
  test('xray', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve('3'),
      new Promise((resolve) => setTimeout(resolve, 100))
    ]

    let counter = 0
    const observer = {
      increment: () => counter++
    }

    await xray(promises, observer)

    expect(counter).toBe(3)
  })
})