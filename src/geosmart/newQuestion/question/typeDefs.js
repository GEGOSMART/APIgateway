export const questionTypeDef = `
    type Nquestion {
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

    input NquestionInput{
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
    createQuestion(nquestion: Nquestion!): Nquestion!
    updateQuestion(id: Int!, nquestion: Nquestion!): Nquestion!
    deleteQuestion(id: Int!): String!
`;