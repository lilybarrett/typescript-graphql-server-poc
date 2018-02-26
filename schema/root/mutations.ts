import channels from ".././data/channels";

let nextId = 5;

export default {
        Mutation: {
            createChannel: async ( parent: any, args: any) => {
                const newChannel = { id: nextId++, name: args.name };
                channels.push(newChannel);
                return newChannel;
            },
    },
};
