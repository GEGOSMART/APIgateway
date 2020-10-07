export const contactsTypeDef = `
  type Contact {
      id: Int!
      user: String!
      message: String!
      chat: String!
  }
  input ContactInput {
    user: String!
    message: String!
    chat: String!
  }`;

export const contactsQueries = `
      allContacts: [Contact]!
  `;


