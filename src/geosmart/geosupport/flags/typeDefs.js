export const flagTypeDef = `
  type Flag {
      id_flag: Int!
      flagImage: String!
      colors: [Color]
  }
  input FlagInput {
      flagImage: String!
  }`;

export const flagQueries = `
      allFlags: [Flag]!
      flagById(id_flag: Int!): Flag!
  `;

export const flagMutations = `
    createFlag(flag: FlagInput!): Flag!
    updateFlag(id_flag: Int!, flag: FlagInput!): Flag!
    deleteFlag(id_flag: Int!): Int
`;
