export const scoreTypeDef = `
  type score {
      ID: Int!
      ID_User: String!
      Score: Int!
      DatePlayed: String!
      ID_Game: String!
  }
  type response{
      message: String!  
  }
  input scoreInput {
      ID_User: String!
      Score: Int!
      DatePlayed: String!
      ID_Game: String!
  }`;

export const scoreQueries = `
      allScores: [score]!
      bestScoreByUserandGame(ID_User: String!, ID_Game: String!): [score]!
      bestScoreByGame(ID_Game: String!): [score]!
  `;

export const scoreMutations = `
    createScore(score: scoreInput!): response!
    updateScore(ID: Int!, ID_User: String!, Score: Int!, DatePlayed: String!, ID_Game: String!): response!
    deleteScore(ID: Int!): response!
`;
