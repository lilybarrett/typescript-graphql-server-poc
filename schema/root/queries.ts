import { Channel } from "../../models";

export default {
    Query: {
        channels: () => {
            const channels = Channel.findAll<Channel>();
            return channels;
        },
    },
};
