import channels from ".././data/channels";
import {Channel } from "../../models";

export default {
    Query: {
        channels: () => {
            return channels;
        },
    },
};
