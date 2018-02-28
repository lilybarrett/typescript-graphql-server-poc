import { Channel, Message } from "../../models";

export default {
        Mutation: {
            createChannel: async ( parent, args ) => {
                return await Channel.create({ name: args.name });
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
            createChannelMessage: async ( parent, args ) => {
                const channelMessage = await Message.create({
                    text: args.text,
                    messageUser: args.messageUser,
                    messageChannelId: args.messageChannelId,
                });
                return channelMessage;
                // const channelToUpdate = await Channel.findById(args.messageChannelId);
                // tslint:disable-next-line:max-line-length
                // channelToUpdate.update( { channelMessages: { ...channelToUpdate.channelMessages, ...channelMessage }}, { where: { id: args.messageChannelId }});
                // return channelToUpdate;
            },
    },
};
