import {useSyncExternalStore} from 'react';

export type Route = 'home' | 'choose' | 'tricordarr' | 'web' | 'kraken' | 'onboard' | 'actions';

const routesByHash: Record<string, Route> = {
  '#/choose': 'choose',
  '#/tricordarr': 'tricordarr',
  '#/web': 'web',
  '#/kraken': 'kraken',
  '#/onboard': 'onboard',
  '#/actions': 'actions',
};

let previousHash = '';

window.addEventListener('hashchange', event => {
  previousHash = new URL(event.oldURL).hash;
});

/**
 * The screen the visitor just came from, for screens that can be reached from several places.
 * Empty after a reload or when they came from the home screen.
 */
export const getPreviousHash = () => previousHash;

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
};

const getRoute = (): Route => routesByHash[window.location.hash] ?? 'home';

/**
 * Reads the current screen from the URL hash. Screens are changed with plain links like
 * href="#/choose", so the browser's Back button works and GitHub Pages never has to serve a
 * path it doesn't know about.
 */
export const useHashRoute = () => useSyncExternalStore(subscribe, getRoute);
