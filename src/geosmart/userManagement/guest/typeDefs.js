export const guestTypeDef = `
  input GuestInput {
    username: String!
  }
`;

export const guestMutations = `
  loginGuest(guest: GuestInput!): String!
`;
