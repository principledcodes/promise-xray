import { all, allSettled, observables } from '.'

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

  test('all', async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ]

    await all(promises, observer)

    expect(observer.increment).toBeCalledTimes(3)
  })

  test('allSettled', async () => {
    const promises = [
      Promise.resolve('1'),
      Promise.resolve('2'),
      Promise.resolve('3'),
      Promise.resolve('4'),
    ]

    await allSettled(promises, observer)

    expect(observer.increment).toBeCalledTimes(4)
  })
})