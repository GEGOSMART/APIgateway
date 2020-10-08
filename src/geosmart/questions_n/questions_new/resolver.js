import { generalRequest, getRequest, requestParseBody } from '../../../utilities';
import { url, port, entryPointQuestions } from '../server';

const URL = `http://${url}:${port}/${entryPointQuestions}`;

const resolvers = {
  Query: {
    allQuestions: (_) =>
        getRequest(URL, '/all'),
    questionsById: (_, { id }) =>
        generalRequest(`${URL}/${id}`, 'GET'),
  },
  Mutation: {

  },
};

export default resolvers;
