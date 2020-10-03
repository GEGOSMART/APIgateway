export const placeTypeDef = `
  type Place {
      id_place: Int!
      countryId_country: Int!
      placeImage: String!
      name: String!
      description: String! 
  }
  input PlaceInput {
        countryId_country: Int!
        placeImage: String!
        name: String!
        description: String! 
  }`;

export const placeQueries = `
      allPlaces: [Place]!
      placeById(id_place: Int!): Place!
  `;

export const placeMutations = `
    createPlace(place: PlaceInput!): Place!
    updatePlace(id_place: Int!, place: PlaceInput!): Place!
    deletePlace(id_place: Int!): Int
`;
