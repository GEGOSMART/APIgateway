import { generalRequest } from '../../../utilities';
import { url, port, entryPointGuest } from '../server';

const URL = `http://${url}:${port}/${entryPointGuest}`;

const resolvers = {
  Mutation: {
    loginGuest: (_, { guest }) => generalRequest(`${URL}`, 'POST', guest),
  },
};

export default resolvers;
