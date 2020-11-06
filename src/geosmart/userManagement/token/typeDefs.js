export const tokenTypeDef = `
  type ResponseValidateToken {
    valid: Boolean
    message: String
  }
`;

export const tokenQueries = `
  validateToken(token: String!): ResponseValidateToken!
`;