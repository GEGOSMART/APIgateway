import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/${entryPoint}/message`;

const resolvers = {
	Query: {
		allMessages: (_) => getRequest(URL, ''),
		getMessageById: (_, {id}) =>
		generalRequest(`${URL}/${id}`,'GET') ,       
	},
    Mutation: {
		createMessage: (_, {message} ) =>
		generalRequest(`${URL}/`,'POST',message),
		updateMessage: (_, {id, message}) =>
		generalRequest(`${URL}/${id}/`,'PUT',message),
		deleteMessage: (_,{id}) =>
		generalRequest(`${URL}/${id}/`,'DELETE'),
    },
};

export default resolvers;