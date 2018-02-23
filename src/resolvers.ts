const channels = [
    {
        id: 1,
        name: "Sales",
    },
    {
        id: 2,
        name: "CRD",
    },
    {
        id: 3,
        name: "Groups",
    },
    {
        id: 4,
        name: "Emergency",
    },
];

let nextId = 3;

export const resolvers = {
    Query: {
        channels: () => {
            return channels;
        },
    },
    Mutation: {
        createChannel: ( root: any, args: any ) => {
            const newChannel = { id: nextId++, name: args.name };
            channels.push(newChannel);
            return newChannel;
        },
    },
};
