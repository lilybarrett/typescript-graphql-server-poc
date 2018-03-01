import { Channel, Message } from "../../models";

export default {
        Mutation: {
            createChannel: async ( parent, args ) => {
                return await Channel.create({ name: args.name });
            },
            updateChannelName: async ( parent, args ) => {
                const channelToUpdate = await Channel.findById(args.id);
                channelToUpdate.update( { name: args.newName }, { where: { id: channelToUpdate.id } });
                return channelToUpdate;
            },
            deleteChannel: async ( parent, args ) => {
                Channel.destroy( { where: { id: args.id } } );
                return args.id;
            },
            createChannelMessage: async ( parent, args ) => {
                const channelToUpdate = await Channel.findById(args.messageChannelId);
                const channelMessage = await Message.create({
                    text: args.text,
                    messageUser: args.messageUser,
                    messageChannelId: channelToUpdate.id,
                });
                // tslint:disable-next-line:max-line-length
                Channel.update( { channelMessages: { ...channelToUpdate.channelMessages, ...channelMessage }}, { where: { id: args.messageChannelId }});
                return channelMessage;
            },
            updateChannelMessage: async ( parent, args ) => {
                const messageToUpdate = await Message.findById(args.id);
                Message.update( { text: args.newText }, { where: { id: messageToUpdate.id } });
                return messageToUpdate;
            },
            deleteChannelMessage: async ( parent, args ) => {
                Message.destroy( { where: { id: args.id } });
                return args.id;
            },
    },
};
