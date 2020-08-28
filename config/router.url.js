const BASE_ROUTER_URL = '/';

export const ROUTER_URL = {
  BASE: () => `${BASE_ROUTER_URL}`,
  POKEMON_DETAIL: name => `${BASE_ROUTER_URL}pokemon/${name}`
};
