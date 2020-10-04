import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPointUser, entryPointUserLogin } from '../server';

const userURL = `http://${url}:${port}/${entryPointUser}`;
const userLoginURL = `http://${url}:${port}/${entryPointUserLogin}`;

const resolvers = {
  Query: {
    allUsers: (_) => generalRequest(`${userURL}`, 'GET'),
    userById: (_, { id }) => generalRequest(`${userURL}/${id}`, 'GET'),
  },
  Mutation: {
    createUser: (_, { user }) => generalRequest(`${userURL}`, 'POST', user),
    loginUser: (_, { user }) => generalRequest(`${userLoginURL}`, 'POST', user),
    updateUser: (_, { id, user }) =>
      generalRequest(`${userURL}/${id}`, 'PUT', user),
    deleteUser: (_, { id }) => generalRequest(`${userURL}/${id}`, 'DELETE'),
  },
};

export default resolvers;
