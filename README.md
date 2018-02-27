# Typescript GraphQL Server Example

Adapted from Part 2 of Jonas Helfer's [Full-stack React & GraphQL Tutorial](https://dev-blog.apollodata.com/react-graphql-tutorial-part-2-server-99d0528c7928). Updated to use TypeScript  & refactored architecture.

1.
```
$ git clone git@github.com:lilybarrett/typescript-graphql-server-poc.git
$ npm i
$ npm run dev
```

2. Navigate to `localhost:4000/graphiql` to view the GraphiQL interface

3. Test queries:

## For retrieving all channels

```
{
  channels {
    id
    name
  }
}
```

## For retrieving one channel by its ID

```
{
  channel(id: 1) {
    id
    name
  }
}
```

4. Test mutations:

## For creating a channel

```
mutation {
  createChannel(name: "Dev"){
    id
    name
  }
}
```

## For updating a channel

```
mutation {
  updateChannelName(id: 1, newName: "Sales"){
    id
    name
  }
}
```

## For deleting a channel

```
mutation {
  deleteChannel(id: 1)
}
```

Gotchas:

* When importing files in your `schema.graphql` files, make sure A) you use double-quotes and B) you do _not_ have a semi-colon at the end of the import line. The Regex matcher setting up `graphql-import`'s expectations for imports is quite rigid.