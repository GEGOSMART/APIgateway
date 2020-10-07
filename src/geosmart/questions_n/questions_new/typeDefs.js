export const questionTypeDef = `
  type Question_n {
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
      allQuestions: [Question_n]!
      questionsById(id: Int!): Question_n!
  `;

export const questionMutations = `
    
`;
