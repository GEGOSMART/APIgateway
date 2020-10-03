import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Continent`;

const resolvers = {
	Query: {
		allContinents: (_) =>
			getRequest(URL, ''),
		continentById: (_, { id_continent }) =>
			generalRequest(`${URL}/${id_continent}`, 'GET'),
	},
	Mutation: {
		createContinent: (_, { continent }) =>
			generalRequest(`${URL}/`, 'POST', continent),
		updateContinent: (_, { id_continent, continent }) =>
			generalRequest(`${URL}/${id_continent}`, 'PUT', continent),
		deleteContinent: (_, { id_continent }) =>
			generalRequest(`${URL}/${id_continent}`, 'DELETE')
	}
};

export default resolvers;
