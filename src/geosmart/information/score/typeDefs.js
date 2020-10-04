export const scoreTypeDef = `
  type Score {
      ID: Int!
      ID_User: Int!
      Score: Int!
      DatePlayed: DateTime!
      ID_Game: Int!
  }
  input Score {
      ID_User: Int!
      Dcore: Int!
      DatePlayed: DateTime!
      ID_Game: Int!
  }`;

export const scoreQueries = `
      allScores: [Score]!
      bestScoreByUserandGame(ID_User: Int!, ID_Game: Int!): [Score]!
      bestScoreByGame(ID_Game: Int!): [Score]!
  `;

export const scoreMutations = `
    createScore(score: Score!): Score!
    updateScore(ID: Int!, score: Score!): Score!
    deleteScore(ID: Int!): Int
`;
