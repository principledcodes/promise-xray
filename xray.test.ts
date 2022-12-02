import { xray } from './xray'

describe('Xray', () => {
  test('xray', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve('3'),
      new Promise((resolve) => setTimeout(resolve, 100))
    ]

    const observer = { increment: jest.fn() }

    await xray(promises, observer)

    expect(observer.increment).toBeCalledTimes(3)
  })
})