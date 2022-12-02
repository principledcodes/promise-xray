export interface Observer {
  increment: (step?: number) => void
}

export type Observable = (
  promises: Promise<any>[],
  observer: Observer,
) => Promise<any>[]

export type Xray = (
  promises: Promise<any>[],
  observer: Observer,
) => Promise<any>

export const observable: Observable = (promises, observer) =>
  promises.map(( p ) => 
    p.then((args) => {
      observer.increment()
      return args
    })
  )

export const xray: Xray = (promises, observer) => {
  const observablePromises = observable(promises, observer)

  await Promise.all(observablePromises)
}