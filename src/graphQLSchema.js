import merge from "lodash.merge";
import GraphQLJSON from "graphql-type-json";
import { makeExecutableSchema } from "graphql-tools";

import { mergeSchemas } from "./utilities";

// geosupport typeDefs

import {
  colorMutations,
  colorQueries,
  colorTypeDef,
} from "./geosmart/geosupport/colors/typeDefs";

import {
  color_flagMutations,
  color_flagQueries,
  color_flagTypeDef,
} from "./geosmart/geosupport/color_flags/typeDefs";

import {
  countryMutations,
  countryQueries,
  countryTypeDef,
} from "./geosmart/geosupport/countries/typeDefs";

import {
  continentMutations,
  continentQueries,
  continentTypeDef,
} from "./geosmart/geosupport/continents/typeDefs";

import {
  flagMutations,
  flagQueries,
  flagTypeDef,
} from "./geosmart/geosupport/flags/typeDefs";

import {
  placeMutations,
  placeQueries,
  placeTypeDef,
} from "./geosmart/geosupport/places/typeDefs";

// userManagement typeDefs

import {
  userMutations,
  userQueries,
  userTypeDef,
} from "./geosmart/userManagement/user/typeDefs";

import {
  guestMutations,
  guestTypeDef,
} from './geosmart/userManagement/guest/typeDefs';

// geogames typeDefs

import {
  gameQueries,
  gamesTypeDef,
} from './geosmart/geogames/questions/typeDefs';

//information typeDefs

import {
  scoreMutations,
  scoreQueries,
  scoreTypeDef,
} from './geosmart/information/score/typeDefs';

//newQuestion typeDefs

import {
  questionMutations,
  questionQueries,
  questionTypeDef,
} from './geosmart/newQuestion/question/typeDefs';

//communication typeDefs

import {
  messagesQueries,
  messagesTypeDef,
} from './geosmart/communication/messages/typeDefs';

import {
  chatsQueries,
  chatsTypeDef,
} from './geosmart/communication/chats/typeDefs';

import {
  contactsQueries,
  contactsTypeDef,
} from './geosmart/communication/contacts/typeDefs';

// Synchronization users

import {
  usersMutations,
  usersQueries,
  usersTypeDef,
} from "./geosmart/synchronization/users/typeDefs";

// Synchronization rooms

import {
  roomsMutations,
  roomsQueries,
  roomsTypeDef,
} from "./geosmart/synchronization/rooms/typeDefs";

// geosupport resolvers

import colorResolvers from "./geosmart/geosupport/colors/resolvers";
import color_flagResolvers from "./geosmart/geosupport/color_flags/resolvers";
import countryResolvers from "./geosmart/geosupport/countries/resolvers";
import continentResolvers from "./geosmart/geosupport/continents/resolvers";
import flagResolvers from "./geosmart/geosupport/flags/resolvers";
import placeResolvers from "./geosmart/geosupport/places/resolvers";

// userManagement resolvers

import userResolvers from './geosmart/userManagement/user/resolver';
import guestResolvers from './geosmart/userManagement/guest/resolver';

// geogames resolvers

import gameResolvers from './geosmart/geogames/questions/resolver';

//information resolvers

import scoreResolvers from "./geosmart/information/score/resolvers";

//Synchronization resolvers

import synchronizationRoomsResolvers from "./geosmart/synchronization/rooms/resolvers";
import synchronizationUsersResolvers from "./geosmart/synchronization/users/resolvers";

//communication resolvers

import messagesResolvers from './geosmart/communication/messages/resolvers';
import chatsResolvers from './geosmart/communication/chats/resolvers';
import contactsResolvers from './geosmart/communication/contacts/resolvers';

//newQuestion

import questionResolvers from './geosmart/newQuestion/question/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
  [
    "scalar JSON",
    "scalar Object",
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
    //geogames
    gamesTypeDef,
    //information
    scoreTypeDef,
    //newQuestion
    questionTypeDef,
    //communication
    messagesTypeDef,
    contactsTypeDef,
    chatsTypeDef,
    //Synchronization
    usersTypeDef,
    roomsTypeDef,
    //...
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
    //geogames
    gameQueries,
    //information
    scoreQueries,
    //newQuestion
    questionQueries,
    //communication
    messagesQueries,
    contactsQueries,
    chatsQueries,
    //Synchronization
    usersQueries,
    roomsQueries,
    //..
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
    //information
    scoreMutations,
    //newQuestion
    questionMutations,
    //Synchronization
    usersMutations,
    roomsMutations,
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
    guestResolvers,
    // geogames
    gameResolvers,
    //information
    scoreResolvers,
    //newQuestion
    questionResolvers
    //communication
    messagesResolvers,
    contactsResolvers,
    chatsResolvers,
    //Synchronization
    synchronizationRoomsResolvers,
    synchronizationUsersResolvers
  ),
});
