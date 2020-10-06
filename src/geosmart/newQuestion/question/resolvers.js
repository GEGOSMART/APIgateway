import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `https://${url}:${port}/${entryPoint}`;

const resolvers = {

    Query: {

    },
    Mutation: {
        createQuestion: (_, { question }) =>
            generalRequest(`${URL}/`, 'POST', question),
        updateQuestion: (_, { id, question }) =>
            generalRequest(`${URL}/`, 'PUT' , question),
        deleteQuestion: (_, {id}) => 
            generalRequest(`${URL}/`, `DELETE`, question)        
    }

};

export default resolvers;