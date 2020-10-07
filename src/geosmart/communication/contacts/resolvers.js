import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/contacts`;

const resolvers = {
	Query: {
		allContacts: (_) => getRequest(URL, ''),        
	},
    Mutation: {
  
    },
};

export default resolvers;