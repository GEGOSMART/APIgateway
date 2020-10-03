import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Color`;

const resolvers = {
	Query: {
		allColors: (_) =>
			getRequest(URL, ''),
		colorById: (_, { id_color }) =>
			generalRequest(`${URL}/${id_color}`, 'GET'),
	},
	Mutation: {
		createColor: (_, { color }) =>
			generalRequest(`${URL}/`, 'POST', color),
		updateColor: (_, { id_color, color }) =>
			generalRequest(`${URL}/${id_color}`, 'PUT', color),
		deleteColor: (_, { id_color }) =>
			generalRequest(`${URL}/${id_color}`, 'DELETE')
	}
};

export default resolvers;
