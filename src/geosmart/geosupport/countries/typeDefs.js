export const countryTypeDef = `
  type Country {
      id_country: Int!
      continentId_continent: Int!
      flagId_flag: Int!
      latitude: Float!
      longitude: Float!
      name: String!
      capital: String!
      mapImage: String!
      flag: String
      places: [String]
  }
  input CountryInput {
        continentId_continent: Int!
        flagId_flag: Int!
        latitude: Float!
        longitude: Float!
        name: String!
        capital: String!
        mapImage: String!
      
  }`;

export const countryQueries = `
      allCountries: [Country]!
      countryById(id_country: Int!): Country!
      countriesByContinent(id_continent: Int!):[Country]!
  `;

export const countryMutations = `
    createCountry(country: CountryInput!): Country!
    updateCountry(id_country: Int!, color: CountryInput!): Country!
    deleteCountry(id_country: Int!): Int
`;
