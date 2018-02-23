"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = require("./resolvers");
const typeDefs = `
    type Channel {
        id: ID!
        name: String
    }
    type Query {
        channels: [Channel]
    }
`;
const schema = graphql_tools_1.makeExecutableSchema({ typeDefs, resolvers: resolvers_1.resolvers });
exports.schema = schema;
