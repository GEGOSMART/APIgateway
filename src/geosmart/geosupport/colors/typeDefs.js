export const colorTypeDef = `
  type Color {
      id_color: Int!
      name: String!
      hexCode: String!
      flags: [String]
  }
  input ColorInput {
      name: String!
      hexCode: String!
  }`;

export const colorQueries = `
      allColors: [Color]!
      colorById(id_color: Int!): Color!
  `;

export const colorMutations = `
    createColor(color: ColorInput!): Color!
    updateColor(id_color: Int!, color: ColorInput!): Color!
    deleteColor(id_color: Int!): Int
`;
