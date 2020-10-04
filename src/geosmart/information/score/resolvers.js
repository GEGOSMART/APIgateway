import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}`;

const READ = `read.php`;

const GETUSER = `getbestscorebyuser.php`;

const resolvers = {
	Query: {
		allScores: (_) =>
			getRequest(URL,READ),
		bestScoreByUserandGame: (_, { ID_User, ID_Game}) =>
			generalRequest(`${URL}/${GETUSER}`, 'GET'),
		bestScoreByGame: (_, { ID_Game}) =>
			generalRequest(`${URL}/getrecordsofgame.php`, 'GET'),
	},
	Mutation: {
		createScore: (_, { score }) =>
			generalRequest(`${URL}/create.php`, 'POST', score),
		updateScore: (_, { ID, ID_User, Score, DatePlayed, ID_Game }) =>
			generalRequest(`${URL}/update.php`, 'PUT', score),
		deleteScore: (_, { ID }) =>
			generalRequest(`${URL}/delete.php`, 'DELETE')
	}
};

export default resolvers;
