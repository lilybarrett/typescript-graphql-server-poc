import { Table, Column, Model, BelongsTo, ForeignKey } from "sequelize-typescript";
import Channel from "./Channel";

@Table
class Message extends Model<Message> {
    @Column
    public text: string;

    @Column
    public messageUser: string;

    @ForeignKey(() => Channel)
    public messageChannelId: number;

    @BelongsTo(() => Channel)
    public messageChannel: Channel;
}

export default Message;
