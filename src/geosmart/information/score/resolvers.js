import { generalRequest, getRequest } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const URL = `http://${url}:${port}`;

const READ = `read.php`;

const GETUSER = `getbestscorebyuser.php`;

const GETRECORDS = `getrecordsofgame.php`;

const CREATE = `create.php`;

const UPDATE = `update.php`;

const DELETE = `delete.php`;

const resolvers = {
	Query: {
		allScores: (_) =>
			getRequest(URL,READ),
		bestScoreByUserandGame: (_, { ID_User, ID_Game}) =>
			generalRequest(`${URL}/${GETUSER}`, 'GET'),
		bestScoreByGame: (_, { ID_Game}) =>
			generalRequest(`${URL}/${GETRECORDS}`, 'GET'),
	},
	Mutation: {
		createScore: (_, { score }) =>
			generalRequest(`${URL}/${CREATE}`, 'POST', score),
		//updateScore: (_, { ID, ID_User, Score, DatePlayed, ID_Game }) =>
			//generalRequest(`${URL}/${UPDATE}`, 'PUT', score),
		//deleteScore: (_, { ID }) =>
			//generalRequest(`${URL}/${DELETE}`, 'DELETE')
	}
};

export default resolvers;
