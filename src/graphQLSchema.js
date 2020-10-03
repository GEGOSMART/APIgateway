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

import colorResolvers from './geosmart/geosupport/colors/resolvers';
import color_flagResolvers from './geosmart/geosupport/color_flags/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		colorTypeDef,
		color_flagTypeDef
	],
	[
		colorQueries,
		color_flagQueries
	],
	[
		colorMutations,
		color_flagMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		colorResolvers,
		color_flagResolvers
	)
});
