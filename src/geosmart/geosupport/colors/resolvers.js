import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Color`;

const resolvers = {
	Query: {
		allColors: (_) =>
			getRequest(URL, ''),
		colorById: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createColor: (_, { color }) =>
			generalRequest(`${URL}/`, 'POST', color),
		updateColor: (_, { id, color }) =>
			generalRequest(`${URL}/${id}`, 'PUT', color),
		deleteColor: (_, { id }) =>
			generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
