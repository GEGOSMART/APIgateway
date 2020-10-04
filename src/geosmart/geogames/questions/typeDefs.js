export const gamesTypeDef = `
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

  type gameQ{
    categoria: String
    preguntas: [Question]
    ERROR: String
  }

`;

//preguntas: [Question]!

export const gameQueries = `
  gameQuestions(category: String!, continent: String): gameQ!

`;

export const gameMutations = `

`;
