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

export const resolvers = {
    Query: {
        channels: () => {
            return channels;
        },
    },
};
