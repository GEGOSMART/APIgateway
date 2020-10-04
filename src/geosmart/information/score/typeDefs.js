export const scoreTypeDef = `
  type score {
      ID: String!
      ID_User: String!
      Score: String!
      DatePlayed: String!
      ID_Game: String!
  }
  type records {
      score: [score]!	
  }
  input scoreInput {
      ID_User: Int!
      Score: Int!
      DatePlayed: String!
      ID_Game: Int!
  }`;

export const scoreQueries = `
      allScores: records!
      bestScoreByUserandGame(ID_User: Int!, ID_Game: Int!): score!
      bestScoreByGame(ID_Game: Int!): [score]!
  `;

export const scoreMutations = `
    createScore(score: scoreInput!): score!
    updateScore(ID: Int!, records: scoreInput!): score!
    deleteScore(ID: Int!): Int
`;
