export const scoreTypeDef = `
  type records {
      ID: Int!
      ID_User: Int!
      Score: Int!
      DatePlayed: String!
      ID_Game: Int!
  }
  input scoreInput {
      ID_User: Int!
      Score: Int!
      DatePlayed: String!
      ID_Game: Int!
  }`;

export const scoreQueries = `
      allScores: [records]!
      bestScoreByUserandGame(ID_User: Int!, ID_Game: Int!): records!
      bestScoreByGame(ID_Game: Int!): [records]!
  `;

export const scoreMutations = `
    createScore(records: scoreInput!): records!
    updateScore(ID: Int!, records: scoreInput!): records!
    deleteScore(ID: Int!): Int
`;
