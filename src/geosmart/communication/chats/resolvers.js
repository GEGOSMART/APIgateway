import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/chat`;

const resolvers = {
	Query: {
		allChats: (_) => getRequest(URL, ''), 
		getChatsByUsername: (_, {username}) =>
		generalRequest(`${URL}?username=${username}`,'GET'),        
	},
    Mutation: {
		createChat: (_, { chat }) =>
		generalRequest(`${URL}/create/`,'POST',chat),
		updateChat: (_, {id, chat}) =>
		generalRequest(`${URL}/update/${id}`,'PUT',chat),
		deleteChat: (_,{id}) =>
		generalRequest(`${URL}/delete/${id}`, 'DELETE'),
    },
};

export default resolvers;