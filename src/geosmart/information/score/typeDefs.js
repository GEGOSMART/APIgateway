export const scoreTypeDef = `
  type score {
      ID: Int!
      ID_User: Int!
      Score: Int!
      DatePlayed: String!
      ID_Game: Int!
  }
  type response{
      message: String!  
  }
  input scoreInput {
      ID_User: Int!
      Score: Int!
      DatePlayed: String!
      ID_Game: Int!
  }`;

export const scoreQueries = `
      allScores: [score]!
      bestScoreByUserandGame(ID_User: Int!, ID_Game: Int!): [score]!
      bestScoreByGame(ID_Game: Int!): [score]!
  `;

export const scoreMutations = `
    createScore(score: scoreInput!): response!
    updateScore(ID: Int!, records: scoreInput!): response!
    deleteScore(ID: Int!): Int
`;
