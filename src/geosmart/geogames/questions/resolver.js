import { generalRequest, getRequest, requestParseBody } from '../../../utilities';
import { url, port, entryPoint } from '../server';

const gameURL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
  Query: {
    //gameQuestions: (_) => generalRequest(`${gameURL}`, 'GET'),
    gameQuestions: (_, { category, continent}) => {
      if(continent){
         return requestParseBody(`${gameURL}?category=${category}&continent=${continent}`, 'GET', null, true)
      }
      return requestParseBody(`${gameURL}?category=${category}`, 'GET', null, true)
    },

  },
  Mutation: {

  },
};

export default resolvers;
