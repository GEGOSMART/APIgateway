import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/messages`;

const resolvers = {
	Query: {
		allMessages: (_) => getRequest(URL, ''),        
	},
    Mutation: {
  
    },
};

export default resolvers;