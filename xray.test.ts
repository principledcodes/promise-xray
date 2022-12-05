import { observables, xray } from './xray'

describe('Xray', () => {
  const observer = { increment: jest.fn() }

  test('observables', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
    ]

    await Promise.all(observables(promises, observer))

    expect(observer.increment).toBeCalledTimes(2)
  })

  test('xray', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]

    await xray(promises, observer)

    expect(observer.increment).toBeCalledTimes(3)
  })
})