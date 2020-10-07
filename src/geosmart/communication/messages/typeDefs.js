export const messagesTypeDef = `
  type Message {
      id: Int!
      content: String!
      timestamp: String!
      user: String!
  }
  input MessageInput {
    content: String!
    timestamp: String!
    user: String!
  }`;

export const messagesQueries = `
      allMessages: [Message]!
  `;


