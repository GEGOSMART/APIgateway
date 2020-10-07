export const questionTypeDef = `
  type Question {
    _id: String
    statement: String
    image:    String
    optionA:  String
    optionB:  String
    optionC:  String
    optionD:  String
    ans:      String
    category:  String
    continent:  String
    created_at: String
    updated_at: String
    creator: String
  }

`;

//preguntas: [Question]!

export const questionQueries = `
      allQuestions: [Question]!
      questionsById(id: Int!): Question!
  `;

export const questionMutations = `
    
`;
