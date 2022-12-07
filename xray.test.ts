import { observables, scan } from './xray'

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

  test('scan', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]

    await scan(promises, observer)

    expect(observer.increment).toBeCalledTimes(3)
  })
})