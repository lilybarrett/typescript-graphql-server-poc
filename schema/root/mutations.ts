import { Channel } from "../../models";

export default {
        Mutation: {
            createChannel: async ( parent, args ) => {
                const newChannel = await Channel.create({ name: args.name });
                return newChannel;
            },
            updateChannelName: async ( parent, args ) => {
                const channelToUpdate = await Channel.findById(args.id);
                channelToUpdate.update( { name: args.newName }, { where: { id: args.id } });
                return channelToUpdate;
            },
            deleteChannel: async ( parent, args ) => {
                Channel.destroy( { where: { id: args.id } } );
                return args.id;
            },
    },
};
