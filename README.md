# Typescript GraphQL Server Example

Adapted from Part 2 of Jonas Helfer's [Full-stack React & GraphQL Tutorial](https://dev-blog.apollodata.com/react-graphql-tutorial-part-2-server-99d0528c7928). Updated to use TypeScript, full CRUD mutations & queries, & refactored architecture.

1. In one tab in your terminal:
```
$ git clone git@github.com:lilybarrett/typescript-graphql-server-poc.git
$ npm i
$ npm run dev
```

In a second tab in your terminal:

```
$ git clone https://github.com/lilybarrett/typescript-graphql-client-poc
$ npm i
$ npm run dev
```

Note: You will need to create a `.env` file with your Postgres DB_NAME, DB_PASSWORD and DB_USERNAME.

Sample `.env` file content:

```
DB_NAME=database
DB_PASSWORD=password
DB_USERNAME=username
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