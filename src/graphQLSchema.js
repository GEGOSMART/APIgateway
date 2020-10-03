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

import colorResolvers from './geosmart/geosupport/colors/resolvers';
import color_flagResolvers from './geosmart/geosupport/color_flags/resolvers';
import countryResolvers from './geosmart/geosupport/countries/resolvers';
import continentResolvers from './geosmart/geosupport/continents/resolvers';
import flagResolvers from './geosmart/geosupport/flags/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		colorTypeDef,
		color_flagTypeDef,
		countryTypeDef,
		continentTypeDef,
		flagTypeDef
	],
	[
		colorQueries,
		color_flagQueries,
		countryQueries,
		continentQueries,
		flagQueries
	],
	[
		colorMutations,
		color_flagMutations,
		countryMutations,
		continentMutations,
		flagMutations
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
		flagResolvers
		
	)
});
