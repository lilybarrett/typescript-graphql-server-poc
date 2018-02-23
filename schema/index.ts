import mutations from "./root/mutations";
import queries from "./root/queries";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

const resolvers = Object.assign(mutations, queries);
const typeDefs = importSchema("./schema/root/schema.graphql");

export default makeExecutableSchema({resolvers, typeDefs});
