export const questionTypeDef = `
    type Nquestion {
        _id: ID
        statement: String!
        image:    String!
        optionA:  String!
        optionB:  String!
        optionC:  String
        optionD:  String
        ans:      String!
        category:  String!
        continent:  String
        created_at: String
        updated_at: String
        creator: String!
    }

    type Res{
        msg :String!
    }

    input NquestionInput{
        statement: String!
        image:    String!
        optionA:  String!
        optionB:  String!
        optionC:  String
        optionD:  String
        ans:      String!
        category:  String!
        continent:  String
        created_at: String
        updated_at: String
        creator: String!
    }
`;

export const questionQueries = `

`;

export const questionMutations = `
    createQuestion(nquestion: NquestionInput!): String!
    updateQuestion(id: ID!, nquestion: NquestionInput!): String!
    deleteQuestion(id: ID!): String!
`;
