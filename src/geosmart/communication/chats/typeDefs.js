export const chatsTypeDef = `
  type Chat {
      id: Int!
      message: String!
      contact: String!
  }
  input ChatInput {
    message: String!
    contact: String!
  }`;

export const chatsQueries = `
      allChats: [Chat]!
  `;


