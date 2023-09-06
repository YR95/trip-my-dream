import axios from '../service';

const continents = {
  get: () =>
    axios.get('/continents').then(({ data }) => data).catch((error) => {
      throw new Error(error);
    }),
  post: (params) =>
    axios.post('/continents',
      params).then(({ data }) => data).catch((error) => {
      throw new Error(error);
    }),
};

export { continents };