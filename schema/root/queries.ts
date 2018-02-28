import { Channel, Message } from "../../models";

export default {
    Query: {
        channels: async () => {
            // return await Channel.findAll({
            //     include: [ Message ],
            // });
            return await Channel.findAll();
        },
        channel: async (_, { id }) => {
            return await Channel.findById(id);
        },
    },
};
