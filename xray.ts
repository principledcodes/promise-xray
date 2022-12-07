export interface Observer {
  increment: () => void
}

export type Observable = <T>(p: Promise<T>, o: Observer) => Promise<T>

export type Observables = <T>(
  promises: Promise<T>[],
  observer: Observer,
) => Promise<T>[]

export type Scan = <T>(
  promises: Promise<T>[],
  observer: Observer,
) => Promise<Awaited<T>[]>

export const observable: Observable = (promise, observer) =>
  promise.then((result) => {
    observer.increment()
    return result
  })

export const observables: Observables = (promises, observer) =>
  promises.map((promise) => observable(promise, observer))

export const scan: Scan = (promises, observer) =>
  Promise.all(observables(promises, observer))
