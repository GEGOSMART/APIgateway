import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/history`;

const resolvers = {
	Query: {
		allChats: (_) => getRequest(URL, ''),        
	},
    Mutation: {
  
    },
};

export default resolvers;