import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}/`;

const resolvers = {
	Query: {
		allScores: (_) =>
			getRequest(`${URL}/read.php`, ''),
			bestScoreByUserandGame: (_, { ID_User, ID_Game}) =>
			generalRequest(`${URL}/getbestscorebyuser.php`, 'GET'),
			bestScoreByGame: (_, { ID_Game}) =>
			generalRequest(`${URL}/getrecordsofgame.php`, 'GET'),
	},
	Mutation: {
		createScore: (_, { score }) =>
			generalRequest(`${URL}/create.php`, 'POST', score),
		updateScore: (_, { ID, ID_User, Score, DatePlayed, ID_Game }) =>
			generalRequest(`${URL}/update.php`, 'PUT', score),
		deleteColor_Flag: (_, { ID }) =>
			generalRequest(`${URL}/delete.php`, 'DELETE')
	}
};

export default resolvers;
