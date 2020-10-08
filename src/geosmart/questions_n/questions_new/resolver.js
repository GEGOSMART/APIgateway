import { generalRequest, getRequest, requestParseBody } from '../../../utilities';
import { url, port, entryPointKuestions } from '../server';

const URL = `http://${url}:${port}/${entryPointKuestions}`;

const resolvers = {
  Query: {
    allKuestions: (_) =>
        getRequest(URL, '/all'),
    kuestionsById: (_, { id }) =>
        generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {

  },
};

export default resolvers;
