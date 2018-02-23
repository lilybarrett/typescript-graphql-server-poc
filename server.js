"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const graphql_server_express_1 = require("graphql-server-express");
const schema_1 = require("./src/schema");
const PORT = 4000;
const app = express();
app.use("/graphql", bodyParser.json(), graphql_server_express_1.graphqlExpress({ schema: schema_1.schema }));
app.use("/graphiql", graphql_server_express_1.graphiqlExpress({ endpointURL: "/graphql" }));
app.listen(PORT, () => {
    console.log(`GraphQL Server is now running on http://localhost:${PORT}`);
});
