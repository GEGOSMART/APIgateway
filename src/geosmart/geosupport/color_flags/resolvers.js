import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Color_Flag`;

const resolvers = {
	Query: {
		allColor_Flags: (_) =>
			getRequest(URL, ''),
			color_FlagById: (_, { id_color, id_flag}) =>
			generalRequest(`${URL}/${id_color}/${id_flag}`, 'GET'),
	},
	Mutation: {
		createColor_Flag: (_, { color_flag }) =>
			generalRequest(`${URL}/`, 'POST', color_flag),
		updateColor_Flag: (_, { id_color, id_flag, color_flag }) =>
			generalRequest(`${URL}/${id_color}/${id_flag}`, 'PUT', color_flag),
		deleteColor_Flag: (_, { id_color, id_flag }) =>
			generalRequest(`${URL}/${id_color}/${id_flag}`, 'DELETE')
	}
};

export default resolvers;
