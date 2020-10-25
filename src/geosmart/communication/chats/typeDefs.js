export const chatsTypeDef = `
  type Chat {
      id: String!
      participantes: [String]
      messages: [String]
  }
  input ChatInput {
    id: String!
    participantes: [String]
    messages: [String]
  }`;

export const chatsQueries = `
      allChats: [Chat]!
      getChatsByUsername (username: String!): [Chat]
  `;

export const chatMutations = `
      createChat(chat: ChatInput!): Chat!
      updateChat(id: String!, chat: ChatInput!): Chat!
      deleteChat(id: String!): Int
  `;
