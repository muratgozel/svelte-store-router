import { SvelteComponentTyped } from 'svelte'
import { Writable } from 'svelte/store'

interface Route {
  path: string,
  query: { [key: string]: any },
  fragment: { [key: string]: any },
  toString: () => string
}

interface RouteStore<T> extends Writable<T> {
  goto: (url: string) => void
}

interface RouteStoreOptions {
  href?: string,
  sideEffect?: boolean,
  handleNavigation?: boolean | string,
  delay?: number,
  queryParse?: boolean,
  queryTyped?: boolean,
  queryClean?: boolean,
  fragmentParse?: boolean,
  fragmentTyped?: boolean,
  fragmentClean?: boolean
}

export function createRouteStore(options?: RouteStoreOptions): RouteStore<Route>
export function match(pattern: string, path: string, loose?: boolean): { [key: string]: any } | null
export class Match extends SvelteComponentTyped<{path: string, pattern?: string, loose?: boolean}> {}
export class Matcher extends SvelteComponentTyped<{}> {}