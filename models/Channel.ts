import { Table, Column, Model, HasMany } from "sequelize-typescript";
import Message from "./Message";

@Table
class Channel extends Model<Channel> {
    @Column
    public name: string;

    @HasMany(() => Message)
    public channelMessages: Message[];
}

export default Channel;
