export const continentTypeDef = `
  type Continent {
      id_continent: Int!
      name: String!
      countries: [String]
  }
  input ContinentInput {
      name: String!
  }`;

export const continentQueries = `
      allContinents: [Continent]!
      continentById(id_continent: Int!): Continent!
  `;

export const continentMutations = `
    createContinent(continent: ContinentInput!): Continent!
    updateContinent(id_continent: Int!, continent: ContinentInput!): Continent!
    deleteContinent(id_continent: Int!): Int
`;
