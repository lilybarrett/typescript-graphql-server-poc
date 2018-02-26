## Typescript GraphQL Server Example

Adapted from Part 2 of Jonas Helfer's ["Full-stack React & GraphQL Tutorial"](https://dev-blog.apollodata.com/react-graphql-tutorial-part-2-server-99d0528c7928). Updated to use TypeScript  & refactored architecture.

1. `npm run dev`

2. Navigate to `http://localhost:4000/graphiql?query=%7B%0A%20%20channels%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%7D%0A%7D` to view the GraphiQL interface

3. Test query:

```
{
  channels {
    id
    name
  }
}
```

4. Test mutation:

```
mutation {
  addChannel(name: "Dev"){
    id
    name
  }
}
```

Gotchas:

* When importing files in your `schema.graphql` files, make sure A) you use double-quotes and B_ you do _not_ have a semi-colon at the end of the import line. The Regex matcher setting up `graphql-import`'s expectations for imports is pretty rigid.