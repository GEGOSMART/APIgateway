import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Flag`;

const resolvers = {
	Query: {
		allFlags: (_) =>
			getRequest(URL, ''),
		flagById: (_, { id_flag }) =>
			generalRequest(`${URL}/${id_flag}`, 'GET'),
	},
	Mutation: {
		createFlag: (_, { flag }) =>
			generalRequest(`${URL}/`, 'POST', flag),
		updateFlag: (_, { id_flag, flag }) =>
			generalRequest(`${URL}/${id_flag}`, 'PUT', flag),
		deleteFlag: (_, { id_flag }) =>
			generalRequest(`${URL}/${id_flag}`, 'DELETE')
	}
};

export default resolvers;
