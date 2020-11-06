import { generalRequest } from '../../../utilities';
import { url, port, entryPointToken } from '../server';

const tokenURL = `http://${url}:${port}/${entryPointToken}`;

const resolvers = {
  Query: {
    validateToken: (_, { token }) => generalRequest(`${tokenURL}/validate-token/${token}`, 'GET'),
  },
};

export default resolvers;