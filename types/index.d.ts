export interface Observer {
    increment: () => void;
}
export type Observable = <T>(p: Promise<T>, o: Observer) => Promise<T>;
export type Observables = <T>(promises: Array<Promise<T>>, observer: Observer) => Array<Promise<T>>;
export type Xray = <T>(promises: Array<Promise<T>>, observer: Observer) => Promise<Array<Awaited<T>>>;
export const observable: Observable;
export const observables: Observables;
export const xray: Xray;
