import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `https://${url}:${port}/${entryPoint}`;

const resolvers = {

    Query: {

    },
    Mutation: {
        createQuestion: (_, { nquestion }) =>
            generalRequest(`${URL}/`, 'POST', nquestion),
        updateQuestion: (_, { id, question }) =>
            generalRequest(`${URL}/`, 'PUT' , nquestion),
        deleteQuestion: (_, {id}) => 
            generalRequest(`${URL}/`, `DELETE`, nquestion)        
    }

};

export default resolvers;