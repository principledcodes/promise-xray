export interface Observer {
  increment: () => void
}

export type Observable = <T>(p: Promise<T>, o: Observer) => Promise<T>

export type Observables = <T>(
  promises: Promise<T>[],
  observer: Observer,
) => Promise<T>[]

export type All = <T>(
  promises: Promise<T>[],
  observer: Observer,
) => Promise<Awaited<T>[]>

export type AllSettled = <T>(
  promises: Promise<T>[],
  observer: Observer,
) => Promise<PromiseSettledResult<Awaited<T>>[]>

/**
 * Calls observer after promise fulfilled and propagates promise result.
 */
export const observe: Observable = (promise, observer) =>
  promise.finally(() => { observer.increment() })

/**
 * Builds an observable collection of promises. The collection resolves to
 * the same results as the initial promises collection would resolve.
 */
export const observables: Observables = (promises, observer) =>
  promises.map((promise) => observe(promise, observer))

/**
 * Builds an observable collection of promises and resolves it
 * with Promise.all().
 * The observable collection resolved to the collection of the same type as the 
 * initial promises collection would resolve.
 */
export const all: All = async (promises, observer) =>
  await Promise.all(observables(promises, observer))

/**
 * Builds an observable collection of promises and resolves it
 * with Promise.allSettled()
 * The observable collection resolved to the collection of the same type as the 
 * initial promises collection would resolve.
 */
export const allSettled: AllSettled = async (promises, observer) =>
  await Promise.allSettled(observables(promises, observer))

/**
 * Type predicate to identify resolved PromiseSettledResult
 */
export const isResolved = <T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T> => result.status === 'fulfilled'

/**
 * Type predicate to identify rejected PromiseSettledResult
 */
export const isRejected = <T>(result: PromiseSettledResult<T>): result is PromiseRejectedResult => result.status === 'rejected'
