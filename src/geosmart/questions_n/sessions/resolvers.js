import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPointSession } from '../server';

const URL = `http://${url}:${port}/${entryPointSession}`;

const resolvers = {
	Query: {
		allTrivias: (_) =>
			getRequest(URL, '/all'),
		triviaById: (_, { id_trivia }) =>
			generalRequest(`${URL}/${id_trivia}`, 'GET'),
	},
	Mutation: {
		createTrivia: (_, { trivia }) =>
			generalRequest(`${URL}/`, 'POST', trivia),
		updateTrivia: (_, { id_trivia, trivia }) =>
			generalRequest(`${URL}/${id_trivia}`, 'PUT', trivia),

	}
};

export default resolvers;
