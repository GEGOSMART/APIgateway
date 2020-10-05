export const userTypeDef = `
  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    username: String!
    password: String
    country: String!
    profile_picture: String!
    created_at: String!
    token: String!
  }
  type Response {
    message: String!  
  }
  input CreateUserInput {
    firstname: String!
    lastname: String!
    username: String!
    password: String!
    country: String!
    profile_picture: String

  }
  input LoginUserInput {
    username: String!
    password: String!
  }
  input UpdateUserInput {
    firstname: String
    lastname: String
    username: String
    password: String!
    new_password: String
    country: String
    profile_picture: String
  }
`;

export const userQueries = `
  allUsers: [User]!
  userById(id: ID!): User!
`;

export const userMutations = `
  createUser(user: CreateUserInput!): Response!
  loginUser(user: LoginUserInput!): User!
  updateUser(id: ID!, user: UpdateUserInput!): User!
  deleteUser(id: ID!):Response! 
`;
