import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Channel {
        id: ID!
        name: String
    }
    type Query {
        channels: [Channel]
    }
    type Mutation {
        createChannel (
            name: String!
        ): Channel
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema });
export { schema };
