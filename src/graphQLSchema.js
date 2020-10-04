import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	colorMutations,
	colorQueries,
	colorTypeDef
} from './geosmart/geosupport/colors/typeDefs';

import {
	color_flagMutations,
	color_flagQueries,
	color_flagTypeDef
} from './geosmart/geosupport/color_flags/typeDefs';

import {
	countryMutations,
	countryQueries,
	countryTypeDef
} from './geosmart/geosupport/countries/typeDefs';

import {
	continentMutations,
	continentQueries,
	continentTypeDef
} from './geosmart/geosupport/continents/typeDefs';

import {
	flagMutations,
	flagQueries,
	flagTypeDef
} from './geosmart/geosupport/flags/typeDefs';

import {
	placeMutations,
	placeQueries,
	placeTypeDef
} from './geosmart/geosupport/places/typeDefs';

import {
	scoreMutations,
	scoreQueries,
	scoreTypeDef
} from './geosmart/information/score/typeDefs';

import colorResolvers from './geosmart/geosupport/colors/resolvers';
import color_flagResolvers from './geosmart/geosupport/color_flags/resolvers';
import countryResolvers from './geosmart/geosupport/countries/resolvers';
import continentResolvers from './geosmart/geosupport/continents/resolvers';
import flagResolvers from './geosmart/geosupport/flags/resolvers';
import placeResolvers from './geosmart/geosupport/places/resolvers';
import scoreResolvers from './geosmart/information/score/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		colorTypeDef,
		color_flagTypeDef,
		countryTypeDef,
		continentTypeDef,
		flagTypeDef,
		placeTypeDef,
		scoreTypeDef
	],
	[
		colorQueries,
		color_flagQueries,
		countryQueries,
		continentQueries,
		flagQueries,
		placeQueries,
		scoreQueries
	],
	[
		colorMutations,
		color_flagMutations,
		countryMutations,
		continentMutations,
		flagMutations,
		placeMutations,
		scoreMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		colorResolvers,
		color_flagResolvers,
		countryResolvers,
		continentResolvers,
		flagResolvers,
		placeResolvers,
		scoreResolvers
		
	)
});
