export const guestTypeDef = `
  input GuestInput {
    username: String!
  }

  type Response {
     token: String!  
  }
`;

export const guestMutations = `
  loginGuest(guest: GuestInput!): Response!
`;
