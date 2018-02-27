import { Table, Column, Model } from "sequelize-typescript";

@Table
class Channel extends Model<Channel> {
    @Column
    public name: string;
}

export default Channel;
