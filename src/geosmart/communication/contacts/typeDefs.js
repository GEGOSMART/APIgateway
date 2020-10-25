export const contactsTypeDef = `
  type Contact {
      username: String!
      firstname: String!
      lastname: String!
      friends: [String]
  }
  input ContactInput {
    username: String!
    firstname: String!
    lastname: String!
    friends: [String]
  }`;

export const contactsQueries = `
      allContacts: [Contact]!
  `;

export const contactsMutations = `
      createContact(contact: ContactInput!): Contact!
      updateContact(username: String!, contact: ContactInput!): Contact!
      deleteContact(username: String!): Int
`;

