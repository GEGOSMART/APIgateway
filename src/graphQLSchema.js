import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

// geosupport typeDefs

import {
  colorMutations,
  colorQueries,
  colorTypeDef,
} from './geosmart/geosupport/colors/typeDefs';

import {
  color_flagMutations,
  color_flagQueries,
  color_flagTypeDef,
} from './geosmart/geosupport/color_flags/typeDefs';

import {
  countryMutations,
  countryQueries,
  countryTypeDef,
} from './geosmart/geosupport/countries/typeDefs';

import {
  continentMutations,
  continentQueries,
  continentTypeDef,
} from './geosmart/geosupport/continents/typeDefs';

import {
  flagMutations,
  flagQueries,
  flagTypeDef,
} from './geosmart/geosupport/flags/typeDefs';

import {
  placeMutations,
  placeQueries,
  placeTypeDef,
} from './geosmart/geosupport/places/typeDefs';

// userManagement typeDefs

import {
  userMutations,
  userQueries,
  userTypeDef,
} from './geosmart/userManagement/user/typeDefs';

import {
  guestMutations,
  guestTypeDef,
} from './geosmart/userManagement/guest/typeDefs';

// geosupport resolvers

import colorResolvers from './geosmart/geosupport/colors/resolvers';
import color_flagResolvers from './geosmart/geosupport/color_flags/resolvers';
import countryResolvers from './geosmart/geosupport/countries/resolvers';
import continentResolvers from './geosmart/geosupport/continents/resolvers';
import flagResolvers from './geosmart/geosupport/flags/resolvers';
import placeResolvers from './geosmart/geosupport/places/resolvers';

// userManagement resolvers

import userResolvers from './geosmart/userManagement/user/resolver';
import guestResolvers from './geosmart/userManagement/guest/resolver';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
  [
    'scalar JSON',
    // geosupport
    colorTypeDef,
    color_flagTypeDef,
    countryTypeDef,
    continentTypeDef,
    flagTypeDef,
    placeTypeDef,
    // userManagement
    userTypeDef,
    guestTypeDef,
  ],
  [
    // geosupport
    colorQueries,
    color_flagQueries,
    countryQueries,
    continentQueries,
    flagQueries,
    placeQueries,
    // userManagement
    userQueries,
  ],
  [
    // geosupport
    colorMutations,
    color_flagMutations,
    countryMutations,
    continentMutations,
    flagMutations,
    placeMutations,
    // userManagement
    userMutations,
    guestMutations,
  ]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
  typeDefs: mergedTypeDefs,
  resolvers: merge(
    { JSON: GraphQLJSON }, // allows scalar JSON
    // geosupport
    colorResolvers,
    color_flagResolvers,
    countryResolvers,
    continentResolvers,
    flagResolvers,
    placeResolvers,
    // userManagement
    userResolvers,
    userResolvers
  ),
});
