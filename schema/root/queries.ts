import { Channel } from "../../models";

export default {
    Query: {
        channels: async () => {
            const channels = await Channel.findAll();
            return channels;
        },
        channel: async (_, { id }) => {
            const channel = await Channel.findById(id);
            return channel;
        },
    },
};
