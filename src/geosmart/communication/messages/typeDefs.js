export const messagesTypeDef = `
  type Message {
      id: Int!
      author: String!
      content: String!
      timestamp: String
  }
  input MessageInput {
    author: String!
    content: String!
    timestamp: String
  }`;

export const messagesQueries = `
      allMessages: [Message]!
      getMessageById(id: Int!): Message
  `;

export const messagesMutations = `
      createMessage(message: MessageInput!): Message!
      updateMessage(id: Int!, message: MessageInput!): Message!
      deleteMessage(id: Int!): Int
`;

