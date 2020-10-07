import { generalRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
  Query: {},
  Mutation: {
    createQuestion: (_, { nquestion }) =>
      generalRequest(`${URL}/`, 'POST', nquestion),
    updateQuestion: (_, { id, nquestion }) =>
      generalRequest(`${URL}/${id}`, 'PUT', nquestion),
    deleteQuestion: (_, { id }) => generalRequest(`${URL}/${id}`, 'DELETE'),
  },
};

export default resolvers;
