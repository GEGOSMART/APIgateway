import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Place`;

const resolvers = {
	Query: {
		allPlaces: (_) =>
			getRequest(URL, ''),
		placeById: (_, { id_place }) =>
			generalRequest(`${URL}/${id_place}`, 'GET'),
	},
	Mutation: {
		createPlace: (_, { place }) =>
			generalRequest(`${URL}/`, 'POST', place),
		updatePlace: (_, { id_place, place }) =>
			generalRequest(`${URL}/${id_place}`, 'PUT', place),
		deletePlace: (_, { id_place }) =>
			generalRequest(`${URL}/${id_place}`, 'DELETE')
	}
};

export default resolvers;
