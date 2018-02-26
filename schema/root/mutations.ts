import { Channel } from "../../models";

export default {
        Mutation: {
            createChannel: async ( parent: any, args: any) => {
                const newChannel = Channel.create({ name: args.name });
                return newChannel;
            },
    },
};
