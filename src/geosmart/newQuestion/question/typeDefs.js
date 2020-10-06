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

    input QuestionInput{
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

export const questionQueries = `

`;

export const questionMutations = `
    createQuestion(question: Question!): Question!
    updateQuestion(id: Int!, question: Question!): Question!
    deleteQuestion(id: Int!): String!
`;