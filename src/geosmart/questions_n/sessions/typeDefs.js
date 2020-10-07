export const triviaTypeDef = `
  type Trivia {
      id: Int
      type: String
      description: String
      toUserId: String
      fromUserId: String
      creationDate: String
      status: String
  }
  input TriviaInput {
        type: String!
        description: String!
        toUserId: String!
        fromUserId: String!
        status: String!
  }`;

export const triviaQueries = `
       allTrivias: [Trivia]!
       triviaById(id: Int!): Trivia!
  `;

export const triviaMutations = `
    createTrivia(trivia: TriviaInput!): Trivia!
    updateTrivia(id_trivia: Int!, trivia: TriviaInput!): Trivia!
`;
