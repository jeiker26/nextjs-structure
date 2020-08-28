import { API_URLS, axiosInstance } from '../api';

export class PokemonService {
  constructor(axiosI = axiosInstance) {
    this.axiosI = axiosI;
  }

  async get(paginationData) {
    try {
      const res = await this.axiosI.get(API_URLS.POKEMON, {
        params: paginationData
      });

      return res.data;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getByName(name) {
    try {
      const res = await this.axiosI.get(`${API_URLS.POKEMON}/${name}`);

      return res.data;
    } catch (error) {
      return { error: error.message };
    }
  }
}
