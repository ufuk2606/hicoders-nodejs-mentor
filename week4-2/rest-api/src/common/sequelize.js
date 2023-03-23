import {Sequelize} from 'sequelize';
import Posts from '../models/postsModel.js';

const sequelize = new Sequelize('Bloggy', 'hicoders', 'hicoders_12', {
    host: 'localhost',
    dialect:'mysql',
    define: {
        freezeTableName:true
    }
  });

const connectToDatabase= async()=>{
    try {
    await sequelize.authenticate();
    await Posts.sync()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


  connectToDatabase()