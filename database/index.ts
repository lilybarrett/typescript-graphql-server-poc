import {Sequelize} from 'sequelize-typescript';
import { Channel } from "../models";
require("dotenv").config();

const sequelize =  new Sequelize({
        database: process.env.DB_NAME,
        dialect: 'postgres',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
});

export default async ( force: boolean = false ) => {
        sequelize.addModels([Channel]);
        await sequelize.sync({force});
        return sequelize;
}