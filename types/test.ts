import { observable } from './index'

describe('Xray types', () => {
  const observer = { increment: jest.fn() }

  test('observable preserves original promise types', () => {
    observable(Promise.resolve(1), observer) // $ExpectType Promise<number>
    observable(Promise.resolve('2'), observer) // $ExpectType Promise<string>
  })
})
