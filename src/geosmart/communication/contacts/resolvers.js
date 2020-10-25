import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/contact`;

const resolvers = {
	Query: {
		allContacts: (_) => getRequest(URL, ''),        
	},
    Mutation: {
		createContact: (_, {contact} ) =>
		generalRequest(`${URL}/`,'POST',contact),
		updateContact: (_, {username, contact}) =>
		generalRequest(`${URL}/${username}/`,'PUT',contact),
		deleteContact: (_,{username}) =>
		generalRequest(`${URL}/${username}/`,'DELETE'),
    },
};

export default resolvers;