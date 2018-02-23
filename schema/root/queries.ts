import channels from ".././data/channels";

export default {
    Query: {
        channels: () => {
            return channels;
        },
    },
};
