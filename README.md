# promise-xray
Getting insights of promise chain processing.

## Usage

### all
Builds an observable collection of promises and resolves it with Promise.all(). The observable collection resolved to the collection of the same type as the initial promises collection would resolve.

### allSettled
Builds an observable collection of promises and resolves it with Promise.allSettled(). The observable collection resolved to the collection of the same type as the initial promises collection would resolve.

### isRejected
Type predicate to identify rejected PromiseSettledResult

### isResolved
Type predicate to identify resolved PromiseSettledResult

### observe
Calls observer after promise fulfilled and propagates promise result.

### observables
Builds an observable collection of promises. The collection resolves to the same results as the initial promises collection would resolve.

## Contributing
