export const guestTypeDef = `
  input GuestInput {
    username: String!
  }

  type ResponseGuest {
     token: String!  
  }
`;

export const guestMutations = `
  loginGuest(guest: GuestInput!): ResponseGuest!
`;
