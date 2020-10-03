import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/Country`;

const resolvers = {
	Query: {
		allCountries: (_) =>
			getRequest(URL, ''),
		countryById: (_, { id_country }) =>
			generalRequest(`${URL}/${id_country}`, 'GET'),
		countriesByContinent: (_, { id_continent }) =>
			generalRequest(`${URL}/ContinentId/${id_continent}`, 'GET'),
	},
	Mutation: {
		createCountry: (_, { country }) =>
			generalRequest(`${URL}/`, 'POST', country),
		updateCountry: (_, { id_country, country }) =>
			generalRequest(`${URL}/${id_country}`, 'PUT', country),
		deleteCountry: (_, { id_country }) =>
			generalRequest(`${URL}/${id_country}`, 'DELETE')
	}
};

export default resolvers;
