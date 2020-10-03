export const color_flagTypeDef = `
  type Color_Flag {
      id_color: Int!
      id_flag: Int!
      order: Int!
      color: String!
      flag: [String]
  }
  input Color_FlagInput {
    id_color: Int!
    id_flag: Int!
    order: Int!
  }`;

export const color_flagQueries = `
      allColor_Flags: [Color_Flag]!
      color_FlagById(id_color: Int!, id_flag: Int!): Color_Flag!
  `;

export const color_flagMutations = `
    createColor_Flag(color_flag: Color_FlagInput!): Color_Flag!
    updateColor_Flag(id_color: Int!, id_flag: Int!, color_flag: Color_FlagInput!): Color_Flag!
    deleteColor_Flag(id_color: Int!, id_flag: Int!): Int
`;
