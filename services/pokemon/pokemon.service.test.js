import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API_URLS } from '../api';
import { PokemonService } from './pokemon.service';

describe('pokemon service tests', () => {
  const axiosIMocksTest = axios.create();
  let mockadapter;

  beforeEach(() => {
    mockadapter = new MockAdapter(axiosIMocksTest);
  });

  afterEach(() => {
    mockadapter.reset();
  });

  it('get all pokemon data successfully from an API', async () => {
    const paginationData = {};
    const resultMock = { results: 'hello world!' };
    mockadapter.onGet(API_URLS.POKEMON).reply(200, resultMock);

    const res = await new PokemonService(axiosIMocksTest).get(paginationData);
    expect(res).toMatchObject(resultMock);
  });

  it('get all pokemon data successfully from an API', async () => {
    const paginationData = {};
    mockadapter.onGet(API_URLS.POKEMON).reply(404);

    const res = await new PokemonService(axiosIMocksTest).get(paginationData);
    expect(res).toMatchObject({ error: 'Request failed with status code 404' });
  });
});
